import User from "../models/user-model.js"
import bcrypt from "bcrypt";

export const home = async(req,res) => {
    try {
            res.status(200).send("Welcome to the server..")
    } catch (error) {
        console.log(error);
    }
}

export const register = async(req,res) => {
    try {
            // console.log("data",req.body);
            const {username,email,phone,password,gender} = req.body;

            const userExist = await User.findOne({email});

            if(userExist){
                return res.status(400).json({ msg: "Email already exists"});
            }else{
                const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
                const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);
        
               const userCreated = await User.create({username,email,phone,password: hashedPassword,gender,profilePic: gender === "male" ? boyProfilePic : girlProfilePic,})

                res.status(201).json({message: "Registration successful",token: await userCreated.generateToken(), userId: userCreated._id.toString(), })
            }
            // res.status(200).json({message:req.body})

    } catch (error) {
        res.status(500).json("Internal server error")
    }
}

export const login = async(req,res) => {
    try{
        const { email, password } = req.body;
		const userExist = await User.findOne({ email });
		const isPasswordCorrect = await bcrypt.compare(password, userExist?.password || "");

		if (!userExist || !isPasswordCorrect) {
			return res.status(401).json({ error: "Invalid email or password" });
		}else{
                res.status(200).json({message: "Login successful",
                token: await userExist.generateToken(), 
                userId: userExist._id.toString(),
            })
        }
    }catch(error){
        res.status(500).json("Internal server error")
        console.log(error);
    }
}

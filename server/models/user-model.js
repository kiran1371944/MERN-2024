import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
		username: {
			type: String,
			required: true,
			// unique: true,
		},
		email: {
			type: String,
			required: true,
			// unique: true,
		},
		phone: {
			type: String,
			required: true,
			minlength: 10,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		gender: {
			type: String,
			required: true,
			enum: ["male", "female"],
		},
		profilePic: {
			type: String,
			default: "",
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	}
);

userSchema.methods.generateToken = await function(){
    try{
        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,           
            }, process.env.Jwt_ScretKey,{ expiresIn: "30d",}
        )
    }catch(error){
        console.log(error);
    }
};

const User = new mongoose.model("User", userSchema);

export default User;
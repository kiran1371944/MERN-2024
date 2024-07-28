import Contact from "../models/contact-model.js";

export const contactForm = async(req,res) => {
    try{
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json("Message send successfully")
    }catch (error) {
        res.status(500).json("Internal server error")
    }
}
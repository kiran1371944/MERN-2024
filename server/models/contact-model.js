import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
			type: String,
			required: true,
			// unique: true,
		},
        message: {
			type: String,
			required: true,
		},
    });
const Contact = new mongoose.model("Contact", contactSchema);

export default Contact;    

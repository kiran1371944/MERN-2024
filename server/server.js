import express from "express";
import authRouter from "./router/auth.router.js";
import dotenv from "dotenv";
import connectToMongoDB from "./db/db.js";
import contactRouter from "./router/contact-router.js";

const app = express();
app.use(express.json());

dotenv.config();
app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/form",contactRouter);

const PORT = process.env.PORT || 5000;

connectToMongoDB().then(() => {
    app.listen(PORT,() =>{
        console.log(`Server is running at port number: ${PORT}`);
    })
})

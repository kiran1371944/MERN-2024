import { z } from "zod";

export const signupSchema = z.object({
    username: z
        .string("Name is required").trim()
        .min(3, { message: "Username must be at least 3 characters long"})
        .max(20, { message: "Username cannot exceed 20 characters"}),
    email: z
        .string("Email is required").trim()
        .email({ message: "Invalid email format"}),
    phone: z
        .string("Phone is required")
        // .transform((value) => value.replace(/[^0-9]/g, ""))
        .max(10, { message: "Phone number do not exceed 10 digits"})
        .min(10, { message: "Phone number must be at least 10 digits"}),
    password: z
        .string("Password is required")
        .min(6, { message: "Password must be at least 6 characters long"}),
    gender: z.enum(["male", "female", "other"]),

  });
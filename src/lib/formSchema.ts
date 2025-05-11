import { z } from "zod";

export const formContactSchema = z.object({
    namaLengkap: z.string().min(2, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email" }).min(1, { message: "Email is required" }),
    pesan: z.string().min(2, { message: "Pesan is required" }),
});

export const formLoginSchema = z.object({
    email: z.string().email({ message: "Invalid email" }).min(1, { message: "Email is required" }),
    password: z.string().min(1, { message: "Password is required" }),
});

export const formRegisterSchema = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().email({ message: "Invalid email" }).min(1, { message: "Email is required" }),
    no_telp: z.string().min(1, { message: "No. Telp is required" }),
    password: z.string().min(1, { message: "Password is required" }),
    "confirm-password": z.string().min(1, { message: "Confirm Password is required" }),
}).refine((data) => data.password === data["confirm-password"], { message: "Password doesn't match", path: ["confirm-password"] });

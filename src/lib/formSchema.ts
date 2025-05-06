import { z } from "zod";

export const formContactSchema = z.object({
    namaLengkap: z.string().min(2, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email" }).min(1, { message: "Email is required" }),
    pesan: z.string().min(2, { message: "Pesan is required" }),
});
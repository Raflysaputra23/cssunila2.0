import { z } from "zod";

export const formContactSchema = z.object({
    namaLengkap: z.string().min(3, { message: "Nama minimal 3 karakter" }),
    email: z.string().email({ message: "Email tidak valid" }).min(1, { message: "Email harus diisi" }),
    pesan: z.string().min(1, { message: "Pesan harus diisi" }),
});

export const formLoginSchema = z.object({
    email: z.string().email({ message: "Email tidak valid" }).min(1, { message: "Email harus diisi" }),
    password: z.string().min(3, { message: "Password minimal 3 karakter" }),
});

export const formRegisterSchema = z.object({
    username: z.string().min(3, { message: "Username minimal 3 karakter" }),
    email: z.string().email({ message: "Email tidak valid" }).min(1, { message: "Email harus diisi" }),
    no_telp: z.string().min(3, { message: "No. Telp harus valid" }),
    password: z.string().min(3, { message: "Password minimal 3 karakter" }),
    "confirm-password": z.string().min(3, { message: "Password minimal 3 karakter" }),
}).refine((data) => data.password === data["confirm-password"], { message: "Password tidak sama", path: ["confirm-password"] });

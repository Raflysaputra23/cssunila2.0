"use server"

import { redirect } from "next/navigation"
import { formContactSchema, formLoginSchema, formRegisterSchema } from "./formSchema"
import bcrypt from "bcryptjs"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"
import { database, databaseAdmin } from "./database"


const formContact = async (previus: unknown ,formData: FormData) => {
    const validationForm = formContactSchema.safeParse(Object.fromEntries(formData.entries()))
    if(!validationForm.success) {
        return {
            error: validationForm.error?.flatten().fieldErrors
        }
    }
    
    const pesan = `Nama: ${validationForm.data.namaLengkap}
Email: ${validationForm.data.email}
Pesan: ${validationForm.data.pesan}`
    redirect(`https://wa.me/6285333369015?text=${encodeURIComponent(pesan)}`)
}

const formLogin = async (previus: unknown ,formData: FormData) => {
    const validationForm = formLoginSchema.safeParse(formData);
    if(!validationForm.success) {
        return {
            error: validationForm.error?.flatten().fieldErrors
        }
    }
    
    const { email, password } = validationForm.data;
    
    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: "/",
        });
    } catch(error) {
        if(error instanceof AuthError) {
            if(error.type === "CredentialsSignin") {
                return { message: "Invalid email or password" }
            } else {
                return { message: "Terjadi kesalahan, silahkan coba beberapa saat lagi" }
            }
        }
        return { message: "Terjadi kesalahan, silahkan coba beberapa saat lagi" }
    }
}

const formRegister = async (previus: unknown ,formData: FormData) => {
    const validationForm = formRegisterSchema.safeParse(Object.fromEntries(formData.entries()));
    if(!validationForm.success) {
        return {
            error: validationForm.error?.flatten().fieldErrors,
            message: validationForm.error?.message
        }
    }

    const { username, email, no_telp, password } = validationForm.data;
    const passwordHash = await bcrypt.hash(password, 10);
    const {data, error} = await databaseAdmin.from("next-auth.users").insert({ email, password: passwordHash }).select("id").single();

    if(!data || error) {
        console.log("ERROR DATABADE: ", error);
        return { message: "Terjadi kesalahan, silahkan coba beberapa saat lagi" }
    }

    const { data: user, error: errorConnection } = await database.from("users").insert({ id: data.id, name: username, email, no_telp }).select("*").single();

    if(!user || errorConnection) {
        console.log("ERROR DATABADE: ", error);
        return { message: "Terjadi kesalahan, silahkan coba beberapa saat lagi" }
    }

    return { message: "Register berhasil" }    

}


export { formContact, formLogin, formRegister }
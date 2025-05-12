"use server"

import { redirect } from "next/navigation"
import { formContactSchema, formLoginSchema, formRegisterSchema } from "./formSchema"
import bcrypt from "bcryptjs"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"
import { createClient } from "@supabase/supabase-js"

const databaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY ?? ""
  )
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
    const validationForm = formLoginSchema.safeParse(Object.fromEntries(formData.entries()));
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
            redirect: false,
        });
        return { status: "success", message: "Login berhasil" }
    } catch(error) {
        if(error instanceof AuthError) {
            if(error.type === "CredentialsSignin") {
                return { 
                    message: "Email atau password salah" 
                }
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
        }
    }

    const { username, email, no_telp, password } = validationForm.data;
    const passwordHash = await bcrypt.hash(password, 10);
    const {data, error: errorAuth} = await databaseAdmin.schema("next_auth").from("users").insert([{email, name: username }]).select("id").single();
    if(!data || errorAuth) {
        return { 
            status: "error",
            message: "Email sudah terdaftar" 
        }
    }

    const { data: user, error: errorUser } = await databaseAdmin.from("users").update({no_telp, password: passwordHash}).eq("id", data.id).select("*").single();

    if(!user || errorUser) {
        return { 
            status: "error",
            message: "Terjadi kesalahan, silahkan coba beberapa saat lagi"
         }
    }

    return { 
        status: "success",
        message: "Register berhasil" 
    }    

}


export { formContact, formLogin, formRegister }
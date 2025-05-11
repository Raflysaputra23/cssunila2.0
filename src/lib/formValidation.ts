"use server"

import { redirect } from "next/navigation"
import { formContactSchema, formLoginSchema, formRegisterSchema } from "./formSchema"
import { createClient } from "@supabase/supabase-js"
import bcrypt from "bcryptjs"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
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

const formLogin = async (formData: { email: string, password: string }) => {
    const validationForm = formLoginSchema.safeParse(formData);
    if(!validationForm.success) {
        throw new Error(JSON.stringify(validationForm.error?.flatten().fieldErrors))
    }
    return {
        data: validationForm.data
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

    const { username: name, email, no_telp, password } = validationForm.data;
    const passwordHash = await bcrypt.hash(password, 10);
    const { data, error} = await supabase.from("users").insert({ name, email, no_telp, password: passwordHash });

    console.log("error", error)
    console.log("data", data)
    if (error) {
        return {
            message: "Data gagal disimpan"
        }
    }

    return {
        message: "Data berhasil disimpan"
    }
    

}


export { formContact, formLogin, formRegister }
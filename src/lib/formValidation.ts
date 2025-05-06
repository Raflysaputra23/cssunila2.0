"use server"

import { redirect } from "next/navigation"
import { formContactSchema } from "./formSchema"

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


export { formContact }
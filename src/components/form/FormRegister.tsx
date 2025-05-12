"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Submit from "@/components/ui/submit";
import { formRegister } from "@/lib/formValidation";
import Link from "next/link";
import { useActionState } from "react";


const FormRegister = () => {
    const [ state, formAction ] = useActionState(formRegister, null)

  return (
    <form action={formAction}>
      <section className="grid w-full max-w-sm items-center gap-1.5 mb-4">
        <Label htmlFor="username">Username</Label>
        <Input type="text" name="username" id="username" placeholder="Username" />
        <p className="text-xs text-red-500">{state?.error?.username?.[0]}</p>
      </section>
      <section className="grid w-full max-w-sm items-center gap-1.5 mb-4">
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Email" />
        <p className="text-xs text-red-500">{state?.error?.email?.[0]}</p>
      </section>
      <section className="grid w-full max-w-sm items-center gap-1.5 mb-4">
        <Label htmlFor="no_telp">No. Telp</Label>
        <Input type="text" name="no_telp" id="no_telp" placeholder="No. Telp" />
        <p className="text-xs text-red-500">{state?.error?.no_telp?.[0]}</p>
      </section>
      <section className="grid w-full max-w-sm items-center gap-1.5 mb-4">
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="Password" />
        <p className="text-xs text-red-500">{state?.error?.password?.[0]}</p>
      </section>
      <section className="grid w-full max-w-sm items-center gap-1.5 mb-4">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" />
        <p className="text-xs text-red-500">{state?.error?.["confirm-password"]?.[0]}</p>
      </section>
      <Submit className="disabled:cursor-not-allowed cursor-pointer mb-3 w-full text-black bg-slate-200 shadow flex items-center gap-2 hover:bg-slate-950 border border-transparent hover:border-slate-200 hover:text-slate-200">
        Register
      </Submit>
      <p className="text-xs text-slate-400 text-center">Belum punya akun? <Link href={"/login"} className="text-blue-500" replace={true}>Login</Link></p>
    </form>
  );
};

export default FormRegister;

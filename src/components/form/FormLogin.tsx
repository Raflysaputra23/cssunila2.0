"use client"

import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Submit from "@/components/ui/submit";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const FormLogin = () => {
    const error = useSearchParams().get("error");

    useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error]);

    const handleSubmit = (formData: FormData) => {
        signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
        }, { callbackUrl: "/" });
    }

  return (
    <form action={handleSubmit}>
      <section className="grid w-full max-w-sm items-center gap-1.5 mb-4">
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Email" />
        <p className="text-xs text-red-500"></p>
      </section>
      <section className="grid w-full max-w-sm items-center gap-1.5 mb-4">
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="password" />
        <p className="text-xs text-red-500"></p>
      </section>
      <Submit className="disabled:cursor-not-allowed cursor-pointer w-full text-black bg-slate-200 shadow flex items-center gap-2 hover:bg-slate-950 border border-transparent hover:border-slate-200 hover:text-slate-200">
        Submit
      </Submit>
      <section className="flex items-center gap-2 my-3 text-sm text-slate-400">
        <hr className="w-full" />
        OR
        <hr className="w-full" />
      </section>
      <Button disabled className="disabled:cursor-not-allowed w-full text-slate-900 cursor-pointer mb-3" variant={"outline"}><i className="bx bxl-google text-2xl"></i> Google</Button>
      <p className="text-xs text-slate-400 text-center">Belum punya akun? <Link href={"/register"} className="text-blue-500" replace={true}>Register</Link></p>
    </form>
  );
};

export default FormLogin;

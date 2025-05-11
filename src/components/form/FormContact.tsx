"use client"

import { useActionState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { formContact } from "@/lib/formValidation";
import Submit from "../ui/submit";

const FormContact = () => {
    const [state, formAction] = useActionState(formContact, null);

  return (
    <form
      action={formAction}
      className="w-[400px] flex-auto p-4 shadow rounded-md bg-slate-900 mt-2"
    >
      <section className="grid w-full items-center gap-1.5 text-slate-200 my-2 mb-4">
        <Label htmlFor="nama-lengkap" className="text-md">
          Nama Lengkap
        </Label>
        <Input type="text" className="text-sm" name="namaLengkap" id="nama-lengkap" placeholder="Nama Lengkap" />
        {state?.error?.namaLengkap && <p className="text-xs text-red-500">{state.error.namaLengkap[0]}</p> }
      </section>
      <section className="grid w-full items-center gap-1.5 text-slate-200 my-4">
        <Label htmlFor="email" className="text-md">
          Email
        </Label>
        <Input type="email" className="text-sm" name="email" id="email" placeholder="Email" />
        {state?.error?.email && <p className="text-xs text-red-500">{state.error.email[0]}</p> }
      </section>
      <section className="grid w-full items-center gap-1.5 text-slate-200 my-4">
        <Label htmlFor="pesan"  className="text-md">
          Pesan
        </Label>
        <Textarea 
          name="pesan"
          placeholder="Masukkan pesan anda"
          rows={4}
          className="resize-none text-sm"
        />
        {state?.error?.pesan && <p className="text-xs text-red-500">{state.error.pesan[0]}</p> }
      </section>
      <Submit className="cursor-pointer bg-slate-800 shadow flex items-center gap-2 hover:bg-slate-950 hover:text-slate-200">
        Kirim <i className="bx bxs-send"></i>
      </Submit>
    </form>
  );
};

export default FormContact;

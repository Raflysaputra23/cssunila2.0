import FormLogin from "@/components/form/FormLogin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const Login = () => {
  return (
    <section className="bg-slate-900 w-[95%] max-w-96 mx-auto p-5 rounded-md shadow text-slate-200">
      <h1 className="text-center text-2xl mb-3">Login</h1>
      <p className="text-sm text-slate-400 text-center mb-8">
        Masukkan username dan password anda
      </p>
      <FormLogin />
    </section>
  );
};

export default Login;

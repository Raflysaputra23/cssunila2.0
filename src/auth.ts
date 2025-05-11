import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import jwt from "jsonwebtoken"
import { formLogin } from "./lib/formValidation"
import { Login } from "./types/types"
import { createClient } from "@supabase/supabase-js"
import bcrypt from "bcryptjs"
import { ZodError } from "zod"
 
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      }, 
      async authorize(credentials) {
        try {
          const { username: email, password } = credentials
          const { data }: { data: Login} = await formLogin({ email, password } as Login)
          const { data: user, error } = await supabase.from("users").select("*").eq("email", data.email).single()

          if (error || !user) {
            throw new Error(JSON.stringify(error))
          }

          const checkPassword = await bcrypt.compare(data.password, user.password)
          if (!checkPassword) {
            throw new Error("Invalid password")
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            picture: user.image,
            no_telp: user.no_telp
          }

        } catch (error) {
          if (error instanceof ZodError) {
            return null
          } else {
            return null
          }
        }
      }
    })
  ],
  adapter: SupabaseAdapter  ({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    secret: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY ?? "",
  }),
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
        token.no_telp = user.no_telp
      }
      return token
    },
    async session({ session, token }) {
      const signingSecret = process.env.NEXT_PUBLIC_SUPABASE_JWT_SECRET
      if (signingSecret) {
        const payload = {
          aud: "authenticated",
          exp: Math.floor(new Date(session.expires).getTime() / 1000),
          sub: token.id,
          email: token.email,
          role: "authenticated",
        }
        session.supabaseAccessToken = jwt.sign(payload, signingSecret)
        session.user.id = token.id as string
        session.user.role = token.role as string
        session.user.no_telp = token.no_telp as string
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
})
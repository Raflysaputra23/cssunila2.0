import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { ZodError } from "zod"
import { formLoginSchema } from "./lib/formSchema"
import { database, databaseAdmin } from "./lib/database"
 

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      }, 
      async authorize(credentials) {
        try {
          const validationForm = formLoginSchema.safeParse(credentials);
          if(!validationForm.success) {
            return null
          }

          const { email, password } = validationForm.data
          
          const { data: user, error: errorAuth } = await databaseAdmin.from("next-auth.users").select("*").eq("email", email).single()

          if (!user || errorAuth) {
            console.log("ERROR DATABASE: ", errorAuth)
            return null
          }

          const checkPassword = await bcrypt.compare(password, user.password)
          if (!checkPassword) {
            return null
          }

          const { data, error } = await database.from("users").select("*").eq("id", user.id).single()

          if (!data || error) {
            console.log("ERROR DATABASE: ", error)
            return null
          }

          return data

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
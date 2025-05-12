import { type DefaultSession } from "next-auth"
 
declare module "next-auth" {
  // Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
  interface Session {
    // A JWT which can be used as Authorization header with supabase-js for RLS.
    supabaseAccessToken?: string
    user: User & DefaultSession["user"]
  }

  interface User {
    id: string
    role: string
    no_telp: string
    email: string
    name: string
    picture?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    sub: string
    role: string
    no_telp: string
  }
}


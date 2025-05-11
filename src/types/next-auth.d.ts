import { type DefaultSession } from "next-auth"
 
declare module "next-auth" {
  // Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
  interface Session {
    // A JWT which can be used as Authorization header with supabase-js for RLS.
    supabaseAccessToken?: string
    user: {
      // The user's postal address
      address: string
      id: string
      role: string
      no_telp: string
      username?: string
      email?: string
      image?: string
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    role: string
    no_telp: string
    username?: string
    email?: string
    image?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: string
    no_telp: string
    username?: string
    email?: string
    image?: string
  }
}


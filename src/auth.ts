/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { ZodError } from "zod";
import { formLoginSchema } from "./lib/formSchema";
import { databaseAdmin } from "./lib/database";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const validationForm = formLoginSchema.safeParse(credentials);
          if (!validationForm.success) {
            return null;
          }

          const { email, password } = validationForm.data;

          const { data: user, error } = await databaseAdmin
            .from("users")
            .select("*")
            .eq("email", email)
            .single();

          if (!user || error) {
            console.log("ERROR DATABASE: ", error);
            return null;
          }

          const checkPassword = await bcrypt.compare(password, user.password);
          if (!checkPassword) {
            return null;
          }
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            no_telp: user.no_telp,
            picture: user.image,
          };
        } catch (error) {
          console.log("ERROR", error);
          if (error instanceof ZodError) {
            return null;
          } else {
            return null;
          }
        }
      },
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    secret: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY ?? "",
  }),
  callbacks: {
    authorized({ auth, request: {nextUrl} }) {
      const isLogged = !!auth?.user;
      
      if(isLogged && (nextUrl.pathname.startsWith("/login") || nextUrl.pathname.startsWith("/register"))) {
        return Response.redirect(new URL("/", nextUrl));
      }
      return true;
    },
    async signIn({ account, profile }: any) {
      if (account.provider === "google") {
        return (
          profile?.email_verified && profile?.email?.endsWith("@gmail.com")
        );
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.no_telp = user.no_telp;

        const signingSecret = process.env.NEXT_PUBLIC_SUPABASE_JWT_SECRET ?? "";
        if (signingSecret) {
          const payload = {
            aud: "authenticated",
            exp: Math.floor(Date.now() / 1000) + 60 * 60, 
            sub: user.id,
            email: user.email,
            role: "authenticated",
          };
          token.supabaseAccessToken = jwt.sign(payload, signingSecret);
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.supabaseAccessToken = token.supabaseAccessToken as string;
      session.user.id = token.sub as string;
      session.user.role = token.role as string;
      session.user.no_telp = token.no_telp as string;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
});

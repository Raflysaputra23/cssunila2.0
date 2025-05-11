import { createClient } from "@supabase/supabase-js"

export const databaseClient = (token: string) => {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
        {
        global: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }
    )

    return supabase;
}

export const database = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
)

export const databaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY ?? ""
  )

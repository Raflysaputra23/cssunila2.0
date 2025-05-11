import { createClient } from "@supabase/supabase-js"

const createSupabaseServerClient = (token: string) => {
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

export default createSupabaseServerClient;

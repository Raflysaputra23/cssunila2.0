import { createClient } from "@supabase/supabase-js"

export const databaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY ?? "",
  )
import type { User } from "@supabase/supabase-js"

import type { AppUser } from "@/store/auth/auth.store"

export const mapSupabaseUser = (user: User): AppUser => {
  if (!user.email) throw new Error("Supabase user has no email")
  if (!user.user_metadata.username) throw new Error("Supabase user has no username")

  return {
    id: user.id,
    email: user.email,
    username: user.user_metadata.username,
  }
}
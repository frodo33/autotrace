import type { LoginPostModel, RegisterUserPostModel } from "./auth.types"
import { supabase } from "@/services/supabaseClient"

export const registerUser = async ({ email, password, username }: RegisterUserPostModel) => {
  const { error } = await supabase.functions.invoke("register", {
    body: { email, password, username }
  })
  
  if (error) throw await error.context.json()
}

export const loginWithEmail = async ({ email, password }: LoginPostModel) => {
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) throw error
}

export const logout = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
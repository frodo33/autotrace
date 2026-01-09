import type { RegisterUserPostModel } from "./auth.types"
import { supabase } from "@/services/supabaseClient"

export const registerUser = async ({ email, password, username }: RegisterUserPostModel) => {
  const { data, error } = await supabase.functions.invoke("register", {
    body: { email, password, username }
  })
  
  if (error) throw await error.context.json()

  return data
}

export const loginWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) throw error

  return data.session
}

export const logout = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
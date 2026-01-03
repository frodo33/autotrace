import { supabase } from "@/services/supabaseClient"

export const getPosts = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("id", { ascending: true })

  if (error) throw error

  return data
}
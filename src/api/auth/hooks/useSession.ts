import { useEffect } from "react"

import { mapSupabaseUser } from "../auth.utils"
import { supabase } from "@/services/supabaseClient"
import { useAuthStore } from "@/store/auth/auth.store"

export const useSession = () => {
  const setSession = useAuthStore(state => state.setSession)
  const reset = useAuthStore(state => state.reset)
  const setLoading = useAuthStore(state => state.setLoading)

  useEffect(() => {
    const initSession = async () => {
      setLoading(true)

      const { data: { session } } = await supabase.auth.getSession()

      if (session?.user && session?.access_token) {
        setSession(session.access_token, mapSupabaseUser(session?.user))
      } else {
        reset()
      }

      setLoading(false)
    }

    initSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user && session.access_token) {
        setSession(session.access_token, mapSupabaseUser(session?.user))
      } else {
        reset();
      }
    });

    return () => subscription.unsubscribe();
  }, [setSession, reset, setLoading])
}
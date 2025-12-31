import { create } from "zustand"

export type User = {
  id: string
  email: string
}

export type AuthState = {
  user?: User
  token?: string
  isAuthenticated: boolean
  isLoadingSession: boolean
  setSession: (token: string, user: User) => void
  setLoading: (loading: boolean) => void
  reset: () => void
}

export const initialState = {
  user: undefined,
  token: undefined,
  isAuthenticated: false,
  isLoadingSession: true,
} 

export const useAuthStore = create<AuthState>((set) => ({
  ...initialState,
  setSession: (token: string, user: User) => set({ token, user, isAuthenticated: true }),
  setLoading: (loading: boolean) => set({ isLoadingSession: loading }),
  reset: () => set({ ...initialState, isLoadingSession: false })
}))
import { create } from "zustand"

export type User = {
  id: string
  name: string
  roles?: string[]
}

export type AuthState = {
  isAuthenticated: boolean
  token?: string
  user?: User
  setAuth: (token: string, user: User) => void
  reset: () => void
}

export const initialState = {
  isAuthenticated: false,
  token: undefined,
  user: undefined
} 

export const useAuthStore = create<AuthState>((set) => ({
  ...initialState,
  setAuth: (token: string, user: User) => set({ token, user, isAuthenticated: true }),
  reset: () => set({ ...initialState })
}))
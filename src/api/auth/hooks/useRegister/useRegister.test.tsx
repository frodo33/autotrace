import type { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { act, renderHook } from "@testing-library/react"
import { toast } from "react-toastify"
import { describe, it, expect, vi, beforeEach, type Mock } from "vitest"

import { useRegister } from "./useRegister"
import { Routes } from "@/routes/router/routes.config"
import { supabase } from "@/services/supabaseClient"

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key })
}))

vi.mock("react-toastify", () => ({
  toast: { error: vi.fn() }
}))

vi.mock("../../auth.api", () => ({
  registerUser: vi.fn()
}))

vi.mock("@/services/supabaseClient", () => ({
  supabase: {
    auth: {
      signInWithPassword: vi.fn()
    }
  }
}))

const signInMock = supabase.auth.signInWithPassword as Mock

const navigateMock = vi.fn()
vi.mock("@tanstack/react-router", async () => {
  const actual = await vi.importActual("@tanstack/react-router")
  return {
    ...actual,
    useNavigate: () => navigateMock,
  }
})

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  })

  const QueryClientWrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )

  return QueryClientWrapper
}

describe("useRegister", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  
  it("navigates to dashboard when login succeeds", async () => {
    signInMock.mockResolvedValueOnce({ error: null })

    const { result } = renderHook(() => useRegister(), { wrapper: createWrapper() })

    await act(async () => {
      await result.current.mutateAsync({
        username: "test",
        email: "test@test.com",
        password: "Password1!"
      })
    })

    expect(navigateMock).toHaveBeenCalledExactlyOnceWith({
      to: Routes.PRIVATE.DASHBOARD
    })
  })

  it("shows error toast and redirects to login when login fails", async () => {
    signInMock.mockResolvedValueOnce({ error: new Error() })

    const { result } = renderHook(() => useRegister(), { wrapper: createWrapper() })

    await act(async () => {
      await result.current.mutateAsync({
        username: "test",
        email: "test@test.com",
        password: "Password1!"
      })
    })

    expect(toast.error).toHaveBeenCalledExactlyOnceWith("errors:unexpected")

    expect(navigateMock).toHaveBeenCalledExactlyOnceWith({
      to: Routes.PUBLIC.LOGIN
    })
  })
})

import type { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { act, renderHook } from "@testing-library/react"
import { describe, it, expect, vi, beforeEach } from "vitest"

import { useLogin } from "./useLogin"
import { Routes } from "@/routes/router/routes.config"

vi.mock("../../auth.api", () => ({
  loginWithEmail: vi.fn()
}))

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

describe("useLogin", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  
  it("navigates to dashboard when login succeeds", async () => {
    const { result } = renderHook(() => useLogin(), { wrapper: createWrapper() })

    await act(async () => {
      await result.current.mutateAsync({
        email: "test@test.com",
        password: "Password1!"
      })
    })

    expect(navigateMock).toHaveBeenCalledExactlyOnceWith({ to: Routes.PRIVATE.DASHBOARD })
  })
})

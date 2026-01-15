import type { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { act, renderHook } from "@testing-library/react"
import { toast } from "react-toastify"
import { describe, it, expect, vi, beforeEach } from "vitest"

import { useRegister } from "./useRegister"
import { loginWithEmail, registerUser } from "../../auth.api"
import { Routes } from "@/routes/router/routes.config"

vi.mock("../../auth.api", () => ({
  registerUser: vi.fn(),
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

describe("useRegister", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  
  it("navigates to dashboard when register and login succeeds", async () => {
    vi.mocked(registerUser).mockResolvedValueOnce(undefined)
    vi.mocked(loginWithEmail).mockResolvedValueOnce(undefined)

    const { result } = renderHook(() => useRegister(), { wrapper: createWrapper() })

    await act(async () => {
      await result.current.mutateAsync({
        username: "test",
        email: "test@test.com",
        password: "Password1!"
      })
    })

    expect(registerUser).toHaveBeenCalledOnce()
    expect(loginWithEmail).toHaveBeenCalledOnce()
    expect(navigateMock).toHaveBeenCalledExactlyOnceWith({
      to: Routes.PRIVATE.DASHBOARD
    })
  })

  it("shows error toast and navigates to login when login fails", async () => {
    vi.mocked(registerUser).mockResolvedValueOnce(undefined)
    vi.mocked(loginWithEmail).mockRejectedValueOnce(new Error())

    const { result } = renderHook(() => useRegister(), { wrapper: createWrapper() })

    await act(async () => {
      await result.current.mutateAsync({
        username: "test",
        email: "test@test.com",
        password: "Password1!"
      })
    })

    expect(registerUser).toHaveBeenCalledOnce()
    expect(toast.error).toHaveBeenCalledExactlyOnceWith("errors:unexpected")
    expect(navigateMock).toHaveBeenCalledExactlyOnceWith({
      to: Routes.PUBLIC.LOGIN
    })
  })
})

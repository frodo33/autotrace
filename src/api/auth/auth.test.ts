import { describe, it, expect, vi, beforeEach } from "vitest"

import { registerUser } from "./auth.api"
import { supabase } from "@/services/supabaseClient"

vi.mock("@/services/supabaseClient", () => ({
  supabase: {
    functions: {
      invoke: vi.fn()
    }
  }
}))

describe("registerUser", () => {
  const invokeMock = vi.mocked(supabase.functions.invoke)

  beforeEach(() => {
    vi.clearAllMocks()
  })
  
  it("returns data when invoke succeeds", async () => {
    invokeMock.mockResolvedValueOnce({ data: { id: 1 }, error: null })

    const result = await registerUser({
      username: "test",
      email: "test@test.com",
      password: "Password1!"
    })

    expect(result).toEqual({ id: 1 })
  })

  it("throws when invoke returns error", async () => {
    invokeMock.mockResolvedValueOnce({ data: null, error: { context: { json: async () => ({ message: "fail" }) } } })

    await expect(registerUser({
      username: "test",
      email: "test@test.com",
      password: "Password1!"
    })).rejects.toEqual({ message: "fail" })
  })
})

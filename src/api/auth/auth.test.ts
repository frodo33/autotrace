import type { AuthError } from "@supabase/supabase-js"
import { describe, it, expect, vi, beforeEach } from "vitest"

import { loginWithEmail, registerUser } from "./auth.api"
import { supabase } from "@/services/supabaseClient"

vi.mock("@/services/supabaseClient", () => ({
  supabase: {
    functions: {
      invoke: vi.fn()
    },
    auth: {
      signInWithPassword: vi.fn()
    }
  }
}))

beforeEach(() => {
  vi.clearAllMocks()
})

describe("registerUser", () => {
  const invokeMock = vi.mocked(supabase.functions.invoke)

  it("throws error when invoke fails", async () => {
    invokeMock.mockResolvedValueOnce({
      data: null,
      error: {
        context: {
          json: async () => ({ message: "fail" })
        }
      }
    })

    await expect(registerUser({
      username: "test",
      email: "test@test.com",
      password: "Password1!"
    })).rejects.toEqual({ message: "fail" })
  })
})

describe("loginWithEmail", () => {
  const signInMock = vi.mocked(supabase.auth.signInWithPassword)

  it("throws error when signInWithPassword fails", async () => {
    const error = new Error("asd") as unknown as AuthError
    signInMock.mockResolvedValueOnce({
      data: {
        user: null,
        session: null,
      },
      error
    })

    await expect(loginWithEmail({
      email: "test@test.com",
      password: "Password1!"
    })).rejects.toBe(error)
  })
})

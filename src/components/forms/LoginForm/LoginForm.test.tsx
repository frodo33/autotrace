import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi, beforeEach } from "vitest"

import { LoginForm } from "./LoginForm.component"

const mutateAsyncMock = vi.fn()
let isPendingMock = false

vi.mock("@/api/auth/hooks/useLogin/useLogin", () => ({
  useLogin: () => ({
    mutateAsync: mutateAsyncMock,
    isPending: isPendingMock,
  })
}))

const setup = () => {
  const user = userEvent.setup()
  render(<LoginForm />)

  return {
    user,
    emailInput: screen.getByLabelText("user:emailLabel"),
    passwordInput: screen.getByLabelText("user:passwordLabel"),
    submitButton: screen.getByRole("button", { name: "user:login:submit" })
  }
}

describe("LoginForm", () => {
  beforeEach(() => {
    isPendingMock = false
    mutateAsyncMock.mockClear()
  })
  
  it("calls mutateAsync with correct data", async () => {
    const { user, emailInput, passwordInput, submitButton } = setup()

    await user.type(emailInput, "test@test.com")
    await user.type(passwordInput, "Password1!")

    await user.click(submitButton)

    expect(mutateAsyncMock).toHaveBeenCalledExactlyOnceWith({
      email: "test@test.com",
      password: "Password1!",
    })
  })

  it("disables inputs when isPending is true", () => {
    isPendingMock = true
    const { emailInput, passwordInput, submitButton } = setup()

    expect(emailInput).toBeDisabled()
    expect(passwordInput).toBeDisabled()
    expect(submitButton).toBeDisabled()
  })
})

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi, beforeEach } from "vitest"

import { RegisterForm } from "./RegisterForm.component"

const mutateAsyncMock = vi.fn()
let isPendingMock = false

vi.mock("@/api/auth/hooks/useRegister/useRegister", () => ({
  useRegister: () => ({
    mutateAsync: mutateAsyncMock,
    isPending: isPendingMock,
  })
}))

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key })
}))

const setup = () => {
  const user = userEvent.setup()
  render(<RegisterForm />)

  return {
    user,
    usernameInput: screen.getByLabelText("user:usernameLabel"),
    emailInput: screen.getByLabelText("user:emailLabel"),
    passwordInput: screen.getByLabelText("user:passwordLabel"),
    cPasswordInput: screen.getByLabelText("user:cPasswordLabel"),
    submitButton: screen.getByRole("button", { name: "user:register:submit" })
  }
}

describe("RegisterForm", () => {
  beforeEach(() => {
    isPendingMock = false
    mutateAsyncMock.mockClear()
  })
  
  it("calls mutateAsync with correct data", async () => {
    const { user, usernameInput, emailInput, passwordInput, cPasswordInput, submitButton } = setup()

    await user.type(usernameInput, "test")
    await user.type(emailInput, "test@test.com")
    await user.type(passwordInput, "Password1!")
    await user.type(cPasswordInput, "Password1!")

    await user.click(submitButton)

    expect(mutateAsyncMock).toHaveBeenCalledExactlyOnceWith({
      username: "test",
      email: "test@test.com",
      password: "Password1!",
    })
  })

  it("disables inputs when isPending is true", () => {
    isPendingMock = true
    const { usernameInput, emailInput, passwordInput, cPasswordInput, submitButton } = setup()

    expect(usernameInput).toBeDisabled()
    expect(emailInput).toBeDisabled()
    expect(passwordInput).toBeDisabled()
    expect(cPasswordInput).toBeDisabled()
    expect(submitButton).toBeDisabled()
  })
})

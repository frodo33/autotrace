import { renderHook } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { describe, expect, it, vi } from "vitest";

import { useFormErrorHandler } from "./useFormErrorHandler";

vi.mock("react-toastify", () => ({
  toast: { error: vi.fn() }
}))

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key })
}))

type FormData = { username: string; password: string }

const setup = () => renderHook(() => {
  const form = useForm<FormData>()
  const hook = useFormErrorHandler(form)

  return { form, hook }
})

describe("useFormErrorHandler", () => {
  it("sets field errors when validationErrors exist", () => {
    const { result } = setup()
    
    vi.spyOn(result.current.form, "setError")

    const error = {
      status: 400,
      message: "Validation failed",
      validationErrors: {
        username: ["required"],
        password: ["minLength"],
      }
    }

    result.current.hook.handleError(error)

    expect(result.current.form.setError).toHaveBeenCalledTimes(2)
    expect(result.current.form.setError).toHaveBeenCalledWith("username", {
      type: "manual",
      message: "errors:validation:required",
    })
    expect(result.current.form.setError).toHaveBeenCalledWith("password", {
      type: "manual",
      message: "errors:validation:minLength",
    })
  })

  it("joins multiple validation errors with newline", () => {
    const { result } = setup()
    
    vi.spyOn(result.current.form, "setError")

    const error = {
      status: 400,
      message: "Validation failed",
      validationErrors: {
        password: ["required", "minLength"],
      }
    }

    result.current.hook.handleError(error)

    expect(result.current.form.setError).toHaveBeenCalledWith("password", {
      type: "manual",
      message: "errors:validation:required\nerrors:validation:minLength",
    })
  })

  it("shows global toast error when no validationErrors", () => {
    const { result } = setup()
    const error = { status: 500, message: "Some error" }

    result.current.hook.handleError(error)

    expect(toast.error).toHaveBeenCalledWith("Some error")
  })

  it("shows fallback toast if message is missing", () => {
    const { result } = setup()
    const error = { status: 500 }

    result.current.hook.handleError(error)

    expect(toast.error).toHaveBeenCalledWith("errors:unexpected")
  })
})
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { TextField } from "./TextField.component"

describe("TextField", () => {
  const id = "uniqId"

  it("passes basic input props (placeholder and value) correctly", () => {
    const placeholder = "Enter email"
    const value = "test@test.com"

    render(<TextField
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={() => {}}
    />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveAttribute("placeholder", placeholder)
    expect(input).toHaveValue(value)
  })

  it("applies disabled prop correctly", () => {
    const { container } = render(<TextField id={id} disabled />)

    const input = screen.getByRole("textbox")
    expect(input).toBeDisabled()

    const inputGroup = container.querySelector("[data-disabled=\"true\"]")
    expect(inputGroup).toBeInTheDocument()
    expect(inputGroup).toHaveClass("cursor-not-allowed")
  })

  it("applies invalid prop correctly", () => {
    render(<TextField id={id} helperText="error" invalid />)

    const helperText = screen.getByText("error")
    const helperId = `${id}-helper`
    expect(helperText).toHaveAttribute("role", "alert")
    expect(helperText).toHaveClass("text-destructive")
    expect(helperText).toHaveAttribute("id", helperId)
    
    const input = screen.getByRole("textbox")
    expect(input).toHaveAttribute("aria-invalid", "true")
    expect(input).toHaveAttribute("aria-describedby", helperId)
  })

  it("renders an input with correct id and label when textarea is not set", () => {
    const label = "Email"
    render(<TextField id={id} label={label} />)

    const input = screen.getByRole("textbox")
    expect(input.tagName).toBe("INPUT")
    expect(input).toHaveAttribute("id", id)

    const inputLabel = screen.getByText(label)
    expect(inputLabel).toBeInTheDocument()
    expect(inputLabel).toHaveAttribute("for", id)
  })

  it("renders textarea when textarea prop is true", () => {
    render(<TextField id={id} textarea />)

    const input = screen.getByRole("textbox")
    expect(input.tagName).toBe("TEXTAREA")
    expect(input).toHaveAttribute("id", id)
  })

  it("calls onChange when input value changes", async () => {
    const handleChange = vi.fn()
    render(<TextField id={id} onChange={handleChange} />)

    const input = screen.getByRole("textbox")
    await userEvent.type(input, "test")
    expect(handleChange).toHaveBeenCalled()
  })

  it("renders addons correctly", () => {
    render(<TextField id={id} addons={(<div>test</div>)} />)

    const addon = screen.getByText("test")
    expect(addon).toBeInTheDocument()
  })

  it("applies classes correctly", () => {
    const { container } = render(
      <TextField id={id} className="my-class" />
    )
    const inputGroup = container.querySelector(".my-class")
    expect(inputGroup).toBeInTheDocument()
  })
})

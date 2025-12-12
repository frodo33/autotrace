import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"

import { Button } from "./Button.component"

describe("Button", () => {
  const btnText = "Click!"

  it("renders children correctly", () => {
    render(<Button>{btnText}</Button>)
    expect(screen.getByRole("button", { name: btnText })).toBeInTheDocument()
  })

  it("shows spinner and disables button when loading", () => {
    render(<Button loading>{btnText}</Button>)

    expect(screen.getByTestId("button-spinner")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: btnText })).toBeDisabled()
  })

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>{btnText}</Button>)

    expect(screen.getByRole("button", { name: btnText })).toBeDisabled()
  })

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<Button onClick={onClick}>{btnText}</Button>)

    await user.click(screen.getByRole("button", { name: btnText }))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it("applies variant and size classes correctly", () => {
    const { container } = render(
      <Button variant="destructive" size="lg">
        {btnText}
      </Button>,
    )
    const button = container.querySelector("button")
    expect(button).toHaveClass("bg-destructive")
    expect(button).toHaveClass("h-10")
  })

  it("renders as Slot when asChild is true", async () => {
    render(
      <Button asChild>
        <a href="/test">{btnText}</a>
      </Button>,
    )

    const link = screen.getByRole("link", { name: btnText })
    expect(link).toBeInTheDocument()
    expect(link.tagName).toBe("A")
  })
})

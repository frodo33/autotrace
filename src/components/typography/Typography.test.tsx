import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Typography } from "./Typography.component"

describe("Typography", () => {
  const text = "Some title"

  it("renders children correctly", () => {
    render(<Typography>{text}</Typography>)
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it("renders the correct tag for variant h2", () => {
    render(<Typography variant="h2">{text}</Typography>)

    const heading = screen.getByRole("heading", { name: text })
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe("H2")
  })

  it("overrides variant when 'as' prop is set", () => {
    render(<Typography variant="h2" as="h1">{text}</Typography>)

    const heading = screen.getByRole("heading", { name: text })
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe("H1")
  })

  it("applies additional className", () => {
    render(<Typography className="custom-class">{text}</Typography>)

    expect(screen.getByText(text)).toHaveClass("custom-class")
  })

  it("renders without crashing when children is null", () => {
    render(<Typography>{null}</Typography>)
  })
})

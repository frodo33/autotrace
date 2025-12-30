import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { TextFieldController } from "./TextFieldController.component"
import { TestFormWrapper } from "@/tests/utils/TestFormWrapper"

describe("TextFieldController", () => {
  it("updates value on change", async () => {
    render(
      <TestFormWrapper<{ email: string }> onSubmit={() => {}}>
        <TextFieldController name="email" label="Email" />
      </TestFormWrapper>
    )

    const input = screen.getByRole("textbox")
    await userEvent.type(input, "test@test.com")
    expect(screen.getByDisplayValue("test@test.com")).toBeInTheDocument()
  })

  it("handles empty value fallback", () => {
    render(
      <TestFormWrapper<{ email: string }> onSubmit={() => {}}>
        <TextFieldController name="email" label="Email" />
      </TestFormWrapper>
    )

    expect(screen.getByDisplayValue("")).toBeInTheDocument()
  })
})

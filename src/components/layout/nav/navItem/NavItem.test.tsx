import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { NavItem } from "./NavItem.component";
import { MockIcon } from "@/tests/utils/MockIcon";
import { renderWithProviders } from "@/tests/utils/renderWithProviders";

describe("NavItem", () => {
  it("renders name and icon", async () => {
    renderWithProviders({
      ui: <NavItem name="Home" path="/" Icon={MockIcon} />
    })

    const link = await screen.findByRole("link", { name: /home/i })
    const icon = await screen.findByTestId("mock-icon")

    expect(link).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it("renders link with correct href", async () => {
    renderWithProviders({
      ui: <NavItem name="Home" path="/home" Icon={MockIcon} />
    })

    const link = await screen.findByRole("link", { name: /home/i })

    expect(link).toHaveAttribute("href", "/home")
  })

  it("applies active classes when route is active", async () => {
    renderWithProviders({
      ui: <NavItem name="Home" path="/home" Icon={MockIcon} />,
      initialPath: "/home"
    })

    const link = await screen.findByRole("link", { name: /home/i })

    expect(link).toHaveClass("bg-primary", "text-primary-foreground", "hover:bg-primary")
  })

  it("does not apply active classes when route is inactive", async () => {
    renderWithProviders({
      ui: <NavItem name="Home" path="/home" Icon={MockIcon} />,
      initialPath: "/",
      additionalPaths: ["/home"]
    })

    const link = await screen.findByRole("link", { name: /home/i })

    expect(link).not.toHaveClass("bg-primary", "text-primary-foreground", "hover:bg-primary")
  })
})
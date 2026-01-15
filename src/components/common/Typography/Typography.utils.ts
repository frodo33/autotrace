import type { JSX } from "react";

import type { TypographyProps } from "./Typography.types";

export const variantToTag: Record<NonNullable<TypographyProps["variant"]>, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p",
  small: "p",
}
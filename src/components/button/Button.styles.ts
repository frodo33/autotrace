import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm " +
          "hover:bg-primary/90 active:bg-primary/80 " +
          "focus-visible:ring-2 focus-visible:ring-primary/30",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm " +
          "hover:bg-destructive/90 active:bg-destructive/80 " +
          "focus-visible:ring-2 focus-visible:ring-destructive/30",
        outline:
          "border border-border/80 text-foreground " +
          "hover:bg-white/10 hover:backdrop-blur-sm shadow-md transition-all duration-150 " +
          "focus-visible:ring-2 focus-visible:ring-primary/30",
        link: "text-foreground underline-offset-4 " + "hover:underline active:opacity-70",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

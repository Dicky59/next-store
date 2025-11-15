import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-invalid:ring-destructive/20 aria-invalid:border-destructive/60",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-elevated hover:shadow-lg hover:bg-primary/92",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/30",
        outline:
          "border border-border/70 bg-background/90 text-foreground backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 hover:text-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "text-foreground hover:bg-muted/60",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
      },
      size: {
        default: "min-h-10 px-6 py-2",
        sm: "min-h-8 px-4 text-xs",
        lg: "min-h-12 px-8 text-base",
        xl: "min-h-[48px] px-6 text-[1.125rem]",
        icon: "size-10",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }


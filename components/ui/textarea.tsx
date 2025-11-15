import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "flex w-full rounded-md border border-input bg-transparent shadow-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
  {
    variants: {
      size: {
        default: "min-h-[60px] px-3 py-2 text-base md:text-sm",
        xl: "min-h-[120px] px-6 py-4 text-[1.125rem]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface TextareaProps
  extends React.ComponentProps<"textarea">,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }

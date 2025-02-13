"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center rounded-[12px] w-full border border-[#197686] text-sm hover:bg-[#2C545B] data-[state=on]:bg-[#12464E] gap-2",
  {
    variants: {
      variant: {
        default: "bg-[#12464E] rounded-[12px]",
        outline:
          "border border-[#197686] bg-transparent hover:bg-[#2C545B]",
      },
      size: {
        default: "py-3 pl-3 pr-6  min-w-10",
        sm: "px-2.5 min-w-9",
        lg: "px-5 min-w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props} />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }

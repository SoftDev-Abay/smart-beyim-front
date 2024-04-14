import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const buttonVariants = cva(
  "border flex rounded-xl justify-center items-center text-[20px] leading-6 px-4 py-[17px] text-white font-normal",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-1000 hover:bg-white hover:border-primary-1000 hover:text-primary-1000  transition",
        primaryOutline: "bg-white border-primary-1000 text-primary-1000",
        green: "bg-[#32936F]",
        greenOutline: "bg-white border border-[#32936F} text-[#32936F]",
        red: "bg-[#F57E77]",
        redOutline: "bg-white border border-[#] text-[#F57E77]",
      },
      size: {
        default: "w-[148px]",
        lg: "w-[343px]",
      },
      state: {
        default: "",
        disabled: "opacity-60 hover:cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      state: "default",
    },
  },
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

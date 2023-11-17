import React, { ButtonHTMLAttributes, forwardRef, LegacyRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/componentUtils";

export const buttonVariants = cva(
  "text-sm flex items-center justify-center gap-3 font-semibold w-max",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white border border-transparent hover:bg-white hover:border-primary transition-all hover:text-black",
        secondary: "bg-secondary text-black",
        outline: "border border-black text-black hover:bg-black hover:text-white",
        unstyled: "",
      },
      size: {
        default: "h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = (
  { className, children, variant, size, ...props }: ButtonProps,
  ref: LegacyRef<HTMLButtonElement>
) => {
  return (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
    </button>
  );
};

export default forwardRef<HTMLButtonElement, ButtonProps>(Button);

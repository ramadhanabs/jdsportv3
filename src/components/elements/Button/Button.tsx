import React, { ButtonHTMLAttributes, forwardRef, LegacyRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/componentUtils";
import Spinner from "../Spinner/Spinner";

export const buttonVariants = cva(
  "text-sm flex items-center justify-center gap-3 font-semibold w-max disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white border border-transparent hover:bg-primary/90 hover:border-primary transition-all hover:text-black",
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
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = (
  { isLoading, className, children, variant, size, ...props }: ButtonProps,
  ref: LegacyRef<HTMLButtonElement>
) => {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default forwardRef<HTMLButtonElement, ButtonProps>(Button);

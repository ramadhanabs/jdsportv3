import React, { forwardRef, InputHTMLAttributes, LegacyRef, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "@/utils/componentUtils";
import { cva, VariantProps } from "class-variance-authority";

export const formInputVariants = cva(
  "w-full border border-gray-200 focus:border-primary focus:outline-none text-gray-600 placeholder-gray-400",
  {
    variants: {
      variantSize: {
        default: "text-xs px-4 py-2",
      },
    },
    defaultVariants: {
      variantSize: "default",
    },
  }
);

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof formInputVariants> {
  label?: string;
  labelClassName?: string;
}

const FormInputText = (props: TextInputProps, ref: LegacyRef<HTMLInputElement>) => {
  const { type, variantSize, className, label, id, labelClassName, ...options } = props;

  const [isShowPassword, setIsShowPassword] = useState(false);

  const typeField = useMemo(() => {
    if (type === "password") {
      if (isShowPassword) return "text";
      return "password";
    }

    return type;
  }, [type, isShowPassword]);

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className={twMerge("font-bold text-uppercase text-xs", labelClassName)}>
          {label}
        </label>
      )}

      <div className="relative w-full">
        <input
          type={typeField}
          ref={ref}
          className={cn(formInputVariants({ variantSize, className }))}
          {...options}
        />

        {type === "password" && (
          <button type="button" onClick={() => setIsShowPassword(!isShowPassword)}>
            <p className="text-[10px] font-semibold absolute top-[30%] right-4 underline text-gray-500">
              Lihat
            </p>
          </button>
        )}
      </div>
    </div>
  );
};

export default forwardRef<HTMLInputElement, TextInputProps>(FormInputText);

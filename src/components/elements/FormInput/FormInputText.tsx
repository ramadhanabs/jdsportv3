import React, { forwardRef, InputHTMLAttributes, LegacyRef } from "react";
import { twMerge } from "tailwind-merge";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const FormInputText = (props: TextInputProps, ref: LegacyRef<HTMLInputElement>) => {
  const { className, ...options } = props;
  return (
    <input
      ref={ref}
      className={twMerge(
        "text-sm border border-gray-200 focus:outline-none text-gray-600 rounded-r-none rounded-l-sm placeholder:text-gray-600 placeholder-[#1a1a1a] placeholder-opacity-75",
        className
      )}
      {...options}
    />
  );
};

export default forwardRef(FormInputText);

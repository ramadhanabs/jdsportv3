import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function ContainerDesktop(
  props: PropsWithChildren<{
    className?: string;
    onClick?: () => void;
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
    onFocus?: () => void;
  }>
) {
  const { children, className = "", onClick, onMouseOver, onMouseLeave, onFocus } = props;
  return (
    <div
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      className={twMerge("w-full max-w-[1440px] mx-auto", className)}
      onFocus={onFocus}
    >
      {children}
    </div>
  );
}

import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function ContainerMobile(props: PropsWithChildren<{ className?: string }>) {
  const { children, className = "" } = props;
  return <div className={twMerge("max-w-[500px] mx-auto", className)}>{children}</div>;
}

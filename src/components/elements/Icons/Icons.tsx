import CartIcon from "@/components/icons/CartIcon";
import UserIcon from "@/components/icons/UserIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import { MappedSizeVariant, SizeVariant } from "@/types/componentsTypes";
import { twMerge } from "tailwind-merge";

export type IconsName = "cart" | "user" | "home";

const ICON_SIZES: MappedSizeVariant & { "x-small": string } = {
  "x-small": "h-4 w-4",
  small: "h-5 w-5",
  large: "h-6 w-6",
};

type Props = {
  name: IconsName;
  className?: string;
  size?: SizeVariant | "x-small";
  width?: number;
  height?: number;
};

export default function Icons(props: Props) {
  const { name, className, size = "small", width, height } = props;

  const classNames = twMerge(ICON_SIZES[size], className, "shrink-0 grow-0");

  switch (name) {
    case "cart":
      return <CartIcon className={classNames} />;
    case "user":
      return <UserIcon className={classNames} />;
    case "home":
      return <HomeIcon className={classNames} />;
    default:
      throw new Error("Invalid icon name");
  }
}

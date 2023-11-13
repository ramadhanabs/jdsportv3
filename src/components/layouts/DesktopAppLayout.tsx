import React, { PropsWithChildren } from "react";
import HeaderDesktop from "./Header/HeaderDesktop/HeaderDesktop";

interface DesktopAppLayoutProps {}

const DesktopAppLayout = (props: PropsWithChildren<DesktopAppLayoutProps>) => {
  const { children } = props;
  return (
    <>
      <HeaderDesktop />
      {children}
    </>
  );
};

export default DesktopAppLayout;

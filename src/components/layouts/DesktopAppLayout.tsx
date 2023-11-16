import React, { PropsWithChildren } from "react";
import Footer from "./Footer/Footer";
import HeaderDesktop from "./Header/HeaderDesktop/HeaderDesktop";

interface DesktopAppLayoutProps {}

const DesktopAppLayout = (props: PropsWithChildren<DesktopAppLayoutProps>) => {
  const { children } = props;
  return (
    <>
      <HeaderDesktop />
      {children}
      <Footer />
    </>
  );
};

export default DesktopAppLayout;

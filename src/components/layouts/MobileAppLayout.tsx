import React, { PropsWithChildren } from "react";
import HeaderMobile from "./Header/HeaderMobile/HeaderMobile";

interface MobileAppLayoutProps {}

const MobileAppLayout = (props: PropsWithChildren<MobileAppLayoutProps>) => {
  const { children } = props;
  return (
    <>
      <HeaderMobile />
      {children}
    </>
  );
};

export default MobileAppLayout;

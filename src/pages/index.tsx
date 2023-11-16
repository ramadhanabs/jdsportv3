import { GetServerSideProps } from "next";
import isMobile from "@/helpers/isMobile";
import HomeDesktop from "@/composites/home/HomeDesktop";
import { DeviceDetectProps } from "@/types/commonTypes";
import HomeMobile from "@/composites/home/HomeMobile";
import MetaData from "@/components/MetaData";

export default function Home({ isMobile }: DeviceDetectProps) {
  const contentRenderer = () => {
    if (isMobile) return <HomeMobile />;
    return <HomeDesktop />;
  };

  return (
    <>
      <MetaData />
      {contentRenderer()}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      isMobile: isMobile(req),
    },
  };
};

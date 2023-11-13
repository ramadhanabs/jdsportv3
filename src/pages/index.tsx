import { GetServerSideProps } from "next";
import isMobile from "@/helpers/isMobile";

export default function Home() {
  return <p>test</p>;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      isMobile: isMobile(req),
    },
  };
};

import Login from "@/composites/login/Login";
import { GetServerSideProps } from "next";
import isMobile from "@/helpers/isMobile";
import MetaData from "@/components/MetaData";

export default function LoginPage() {
  return (
    <>
      <MetaData title="Login" />
      <Login />
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

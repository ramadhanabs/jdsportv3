import Breadcrumb from "@/components/elements/Breadcrumb";
import { ContainerDesktop } from "@/components/elements/Container";
import React from "react";
import LoginForm from "./LoginForm";

const breadcrumb = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/login",
    label: "Login",
  },
];

const Login = () => {
  return (
    <ContainerDesktop className="px-8">
      <Breadcrumb data={breadcrumb} />

      <div className="my-10 max-w-sm mx-auto">
        <LoginForm />
      </div>
    </ContainerDesktop>
  );
};

export default Login;

import { useRefetchCustomerProfile } from "@/api/Customer";
import { useRouter } from "next/router";
import React, { createContext, PropsWithChildren } from "react";

interface AuthContextProps {
  logout: () => Promise<void>;
  afterSuccessLogin: (token: string, identifier: string) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  logout: async () => {},
  afterSuccessLogin: async () => {},
});

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const refetchProfile = useRefetchCustomerProfile();

  return <div>AuthContextProvider</div>;
};

export default AuthContextProvider;

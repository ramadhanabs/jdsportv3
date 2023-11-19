import { getCustomerProfile, postLogoutCustomer, useRefetchCustomerProfile } from "@/api/Customer";
import { CUSTOMER_KEY, EMAIL, IS_LOGIN } from "@/helpers/constants";
import { useStoreActions, useStoreState } from "@/store";
import { ROUTE_GUARD } from "@/utils/routes";
import { googleLogout } from "@react-oauth/google";
import { useRouter } from "next/router";
import React, { createContext, PropsWithChildren, useContext, useEffect } from "react";

interface AuthContextProps {
  logout: () => Promise<void>;
  afterSuccessLogin: (token: string, identifier: string) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  logout: async () => {},
  afterSuccessLogin: async () => {},
});

export default function AuthContextProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const refetchProfile = useRefetchCustomerProfile();

  const { redirectPathLogin, deviceIsMobile } = useStoreState(state => state);
  const { setIsLogin, setCustomerToken, setEmail, setRedirectPathLogin, setIsShowLoginForm } =
    useStoreActions(action => action);

  const validateAuth = () => {
    const isLogin = localStorage.getItem(IS_LOGIN) === "true";
    const token = localStorage.getItem(CUSTOMER_KEY);
    const email = localStorage.getItem(EMAIL);

    if (isLogin && token) {
      setIsLogin(isLogin);
      setCustomerToken(token);
    }

    if (email) {
      setEmail(email);
    }

    if (!token) {
      setIsLogin(false);
    }
  };

  useEffect(
    () => {
      validateAuth();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(
    () => {
      const isLogin = localStorage.getItem(IS_LOGIN) === "true";
      const hasProtectedRoute = ROUTE_GUARD.some((e: string) => router.route.includes(e));

      if (hasProtectedRoute && typeof isLogin === "boolean" && !isLogin) {
        router.push("/login");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.route]
  );

  const handleLogout = async () => {
    try {
      await postLogoutCustomer();
      // eslint-disable-next-line no-empty
    } catch (err) {
    } finally {
      localStorage.removeItem(CUSTOMER_KEY);
      localStorage.removeItem(EMAIL);
      localStorage.removeItem(IS_LOGIN);

      setRedirectPathLogin(null);

      googleLogout();
      router.reload();
    }
  };

  const afterSuccessLogin = async (token: string, identifier: string) => {
    let email = identifier;
    setCustomerToken(token || "");
    localStorage.setItem(CUSTOMER_KEY, token);

    // Switch Phone Number to Email
    if (!identifier?.includes("@") && /^(\+62|62|0|8)[1-9][0-9]/.test(identifier)) {
      email = await getCustomerProfile()?.then(res => res?.data?.email);
    }

    setEmail(email);
    setIsLogin(true);
    setIsShowLoginForm(false);
    refetchProfile();

    localStorage.setItem(EMAIL, email);
    localStorage.setItem(IS_LOGIN, "true");

    if (!deviceIsMobile && !redirectPathLogin) {
      return;
    }

    if (redirectPathLogin) {
      router.push(redirectPathLogin);
      setRedirectPathLogin(null);
      return;
    }

    router.back();
  };

  return (
    <AuthContext.Provider value={{ logout: handleLogout, afterSuccessLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);

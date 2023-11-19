import { Action } from "easy-peasy";

export interface Store {
  deviceIsMobile: boolean;
  setDeviceIsMobile: Action<Store, boolean>;

  isLogin: boolean | null;
  setIsLogin: Action<Store, boolean>;

  redirectPathLogin: string | null;
  setRedirectPathLogin: Action<Store, string | null>;

  isShowLoginForm: boolean | null;
  setIsShowLoginForm: Action<Store, boolean>;

  customerToken: string | undefined;
  setCustomerToken: Action<Store, string>;

  customerDeviceId: string;
  setCustomerDeviceId: Action<Store, string>;

  email: string | undefined;
  setEmail: Action<Store, string>;
}

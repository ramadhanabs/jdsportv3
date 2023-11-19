import { Store } from "@/store/types";
import { Action, action, createStore, createTypedHooks } from "easy-peasy";

export const store = createStore<Store>({
  deviceIsMobile: true,
  setDeviceIsMobile: action((state, payload) => {
    state.deviceIsMobile = payload;
  }),

  isLogin: null,
  setIsLogin: action((state, payload) => {
    state.isLogin = payload;
  }),

  redirectPathLogin: null,
  setRedirectPathLogin: action((state, payload) => {
    state.redirectPathLogin = payload;
  }),

  isShowLoginForm: null,
  setIsShowLoginForm: action((state, payload) => {
    state.isShowLoginForm = payload;
  }),

  customerToken: undefined,
  setCustomerToken: action((state, payload) => {
    state.customerToken = payload;
  }),

  customerDeviceId: "",
  setCustomerDeviceId: action((state, payload) => {
    state.customerDeviceId = payload;
  }),

  email: "",
  setEmail: action((state, payload) => {
    state.email = payload;
  }),
});

const typedHooks = createTypedHooks<Store>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;

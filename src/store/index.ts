import { Store } from "@/store/types";
import { Action, action, createStore, createTypedHooks } from "easy-peasy";

export const store = createStore<Store>({
  deviceIsMobile: true,
  setDeviceIsMobile: action((state, payload) => {
    state.deviceIsMobile = payload;
  }),
});

const typedHooks = createTypedHooks<Store>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;

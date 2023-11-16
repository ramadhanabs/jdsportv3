import { Action } from "easy-peasy";

export interface Store {
  deviceIsMobile: boolean;
  setDeviceIsMobile: Action<Store, boolean>;
}

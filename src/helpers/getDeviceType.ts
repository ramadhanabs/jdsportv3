import { UAParser } from "ua-parser-js";

export type DeviceType = "android" | "ios" | "unknown";

export default function getDeviceType(): DeviceType {
  const os = new UAParser().getOS();

  if (/android/i.test(os.name || "")) {
    return "android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/ios/i.test(os.name || "")) {
    return "ios";
  }

  return "unknown";
}

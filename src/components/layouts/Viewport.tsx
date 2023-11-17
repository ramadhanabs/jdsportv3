import { useStoreActions } from "@/store";
import { useEffect } from "react";

export default function Viewport(props: any) {
  const deviceIsMobile = props.isMobile;

  const setDeviceIsMobile = useStoreActions(action => action.setDeviceIsMobile);

  useEffect(() => {
    if (deviceIsMobile) setDeviceIsMobile(deviceIsMobile);
  }, [deviceIsMobile, setDeviceIsMobile]);

  return <div></div>;
}

import React, { useEffect } from "react";
import { useStoreState } from "@/store";
import Desktop from "@/components/views/SuggestionSearchView/Desktop";
import Mobile from "@/components/views/SuggestionSearchView/Mobile";

const SuggestionSearchView = () => {
  const deviceIsMobile = useStoreState(state => state.deviceIsMobile);

  if (deviceIsMobile) return <Mobile />;

  return <Desktop />;
};

export default React.memo(SuggestionSearchView);

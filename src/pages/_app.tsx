import DesktopAppLayout from "@/components/layouts/DesktopAppLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MobileAppLayout from "@/components/layouts/MobileAppLayout";
import { useEffect } from "react";
import { StoreProvider } from "easy-peasy";
import { store } from "@/store";
import Viewport from "@/components/layouts/Viewport";

export default function App({ Component, pageProps }: AppProps) {
  const { isMobile } = pageProps;

  const client = new QueryClient({
    defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
  });

  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <StoreProvider store={store}>
        <Viewport isMobile={isMobile} />
        {isMobile ? (
          <MobileAppLayout>
            <Component {...pageProps} />
          </MobileAppLayout>
        ) : (
          <DesktopAppLayout>
            <Component {...pageProps} />
          </DesktopAppLayout>
        )}
      </StoreProvider>
    </QueryClientProvider>
  );
}

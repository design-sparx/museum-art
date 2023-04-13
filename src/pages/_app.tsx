import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { theme } from "@/theme";
import "@/styles/globals.css";
import { RouterTransition } from "@/components/RouterTransition";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <RouterTransition />
      <Component {...pageProps} />
    </MantineProvider>
  );
}

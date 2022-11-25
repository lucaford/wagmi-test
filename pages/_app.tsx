import "../styles/globals.css";
import type { AppProps } from "next/app";
import { configureChains, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

export default function App({ Component, pageProps }: AppProps) {
  const { provider, webSocketProvider } = configureChains(
    [chain.mainnet, chain.polygon],
    [publicProvider()]
  );
  return <Component {...pageProps} />;
}

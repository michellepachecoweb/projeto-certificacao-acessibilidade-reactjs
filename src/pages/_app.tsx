import { useEffect, ComponentType } from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { axeAccessibilityReporter } from '../utils/axeAccessibilityReporter'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter()
  }, [])

  return <Component {...pageProps} />;
}

export default MyApp;

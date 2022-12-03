import "../styles/globals.css";
import { NextPage } from "next";
import { ReactElement } from "react";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

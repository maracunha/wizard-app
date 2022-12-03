import { ReactNode } from "react";
import Head from "next/head";
import Header from "../base/Header";
import Footer from "../base/Footer";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>Wizard app</title>
      <meta name="wizard app" content="Apply and test things" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="h-screen px-8">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;

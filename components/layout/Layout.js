import styles from "@/styles/Layout.module.scss";

import Head from "next/head";

import Topnav from "./navigation/Topnav";
import MobileNavbar from "./navigation/MobileNavbar";
import DesktopNavbar from "./navigation/DesktopNavbar";
import Footer from "./Footer";

const Layout = ({ children, metaTitle = "kvn" }) => {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topnav />
      <DesktopNavbar />
      <MobileNavbar />
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

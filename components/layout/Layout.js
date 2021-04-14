import styles from "../../styles/Layout.module.scss";

import Topnav from "./navigation/Topnav";
import MobileNavbar from "./navigation/MobileNavbar";
import DesktopNavbar from "./navigation/DesktopNavbar";

const Layout = ({ children }) => {
  return (
    <>
      <Topnav />
      <DesktopNavbar />
      <MobileNavbar />
      <div className={styles.wrapper}>{children}</div>
    </>
  );
};

export default Layout;

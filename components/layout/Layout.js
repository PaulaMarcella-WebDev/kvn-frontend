import styles from "../../styles/Layout.module.scss";
import Topnav from "./Topnav";
import MobileNav from "./MobileNav";
// import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Topnav />
      {/* <Navbar /> */}
      <MobileNav />
      <div className={styles.wrapper}>{children}</div>
    </>
  );
};

export default Layout;

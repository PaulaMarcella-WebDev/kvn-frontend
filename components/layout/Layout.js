import styles from "../../styles/Layout.module.scss";
import Topnav from "./Topnav";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Topnav />
      <Navbar />
      <div className={styles.wrapper}>{children}</div>
    </>
  );
};

export default Layout;

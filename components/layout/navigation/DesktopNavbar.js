import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/DesktopNavbar.module.scss";
import DesktopNav from "./DesktopNav.js";

import { useTranslation } from "next-i18next";

const DesktopNavbar = () => {
  const { t } = useTranslation("common");
  return (
    <nav className={styles.navbar}>
      <div className={styles.navcontainer}>
        <Link href="/">
          <a>
            <img
              className={styles.logo}
              src="/logo/kvn-logo.svg"
              alt="KVN Logo"
            />
          </a>
        </Link>
      </div>
      <DesktopNav />
    </nav>
  );
};

export default DesktopNavbar;

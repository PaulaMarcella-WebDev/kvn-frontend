import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/MobileNavbar.module.scss";

import MobileNav from "./MobileNav.js";

import { Squash as Hamburger } from "hamburger-react";
import { useTranslation } from "next-i18next";

const MobileNavbar = () => {
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
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
        <div className={styles.hamburger}>
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} rounded />
        </div>
      </div>
      <MobileNav isOpen={isOpen} />
    </nav>
  );
};

export default MobileNavbar;

import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/DesktopNavbar.module.scss";
import NavLinks from "../../../data/nav-links";
import iconSet from "../../../icons/selection.json";
import DropdownLinks from "./DropdownLinks";

import IcomoonReact, { iconList } from "icomoon-react"; // remove iconlist for production
import { useTranslation } from "next-i18next";

const DesktopNav = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.nav}>
      {NavLinks.map((link, index) => {
        if (link.type === "dropdown") {
          return (
            <div key={index} className={styles.dropdown}>
              <span className={styles.dropdowntitle}>
                {t(link.title)}
                <IcomoonReact
                  iconSet={iconSet}
                  color="#111"
                  size={13}
                  icon="chevron-down"
                />
              </span>
              <DropdownLinks sublinks={link.sublinks} styles={styles} />
            </div>
          );
        } else {
          return (
            <div className={styles.dropdown} key={index}>
              <Link href="#">{t(link.title)}</Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default DesktopNav;

import styles from "../../styles/Navbar.module.scss";
import iconSet from "../../icons/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import { Squash as Hamburger } from "hamburger-react";
import NavLinks from "../../data/nav-links";

import { useState } from "react";
import Link from "next/link";

import { useTranslation } from "next-i18next";

const MobileNav = () => {
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
      <div className={`${styles.nav} ${isOpen ? styles.isOpen : " "}`}>
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
                <ul className={styles.navlinks}>
                  {link.sublinks &&
                    link.sublinks.map((sublink, subindex) => (
                      <li className={styles.navlink} key={subindex}>
                        <Link href="#">{t(sublink.title)}</Link>
                      </li>
                    ))}
                </ul>
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
    </nav>
  );
};

export default MobileNav;

import styles from "../../styles/Navbar.module.scss";
import iconSet from "../../icons/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import NavLinks from "../../data/nav-links";

import Link from "next/link";
import Image from "next/image";

import { useTranslation } from "next-i18next";

import { useState } from "react";

const Navbar = () => {
  const [isShown, setIsShown] = useState({ nav1: false });
  const { t } = useTranslation("common");
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>
          <Image
            src="/logo/kvn-logo.svg"
            alt="KVN Logo"
            height={88}
            width={100}
          />
        </a>
      </Link>
      <div className={styles.nav}>
        {NavLinks.map((link) => {
          if (link.type === "dropdown") {
            return (
              <div
                className={styles.dropdown}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                <span className={styles.dropdowntitle}>
                  {t(link.title)}
                  <IcomoonReact
                    iconSet={iconSet}
                    color="#111"
                    size={13}
                    icon="chevron-down"
                  />
                </span>
                {isShown && (
                  <ul className={styles.navlinks}>
                    {link.sublinks &&
                      link.sublinks.map((sublink) => (
                        <li className={styles.navlink}>
                          <Link href="#">{t(sublink.title)}</Link>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            );
          } else {
            return (
              <div className={styles.dropdown}>
                <Link href="#">{t(link.title)}</Link>
              </div>
            );
          }
        })}
      </div>
    </nav>
  );
};

export default Navbar;

/* <div className={styles.dropdown}>
          <Link href="#">{t("services-navlink")}</Link>
          <IcomoonReact
            iconSet={iconSet}
            color="#111"
            size={13}
            icon="chevron-down"
          />
        </div>
        <div className={styles.dropdown}>
          <Link href="#">{t("sales-navlink")}</Link>
          <IcomoonReact
            iconSet={iconSet}
            color="#111"
            size={13}
            icon="chevron-down"
          />
        </div>
        <div className={styles.dropdown}>
          <Link href="#">{t("contact-navlink")}</Link>
          <IcomoonReact
            iconSet={iconSet}
            color="#111"
            size={13}
            icon="chevron-down"
          />
        </div> */

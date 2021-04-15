import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../../styles/DesktopNavbar.module.scss";
import NavLinks from "../../../data/nav-links";
import iconSet from "../../../icons/selection.json";

import DropdownLinks from "./DropdownLinks";

import IcomoonReact, { iconList } from "icomoon-react"; // remove iconlist for production
import { useTranslation } from "next-i18next";
const DesktopNav = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const activeLink = (href) => {
    return router.asPath === "/" + href ? styles.active : "";
  };
  return (
    <div className={styles.nav}>
      {NavLinks.map((link) => {
        if (link.type === "dropdown") {
          return (
            <div key={link.title} className={styles.dropdown}>
              <span className={activeLink(t(link.sublinks[0].href))}>
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
            <div
              className={`${styles.dropdown} ${activeLink(t(link.href))}`}
              key={link.title}
            >
              <Link href={`/${t(link.href)}`}>{t(link.title)}</Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default DesktopNav;

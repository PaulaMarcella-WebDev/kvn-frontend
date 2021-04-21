import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/DesktopNavbar.module.scss";
import NavLinks from "@/data/nav-links";
import iconSet from "@/icons/selection.json";
import { activeLink, convertToHref } from "@/helpers";
import DropdownLinks from "./DropdownLinks";

import IcomoonReact, { iconList } from "icomoon-react"; // remove iconlist for production
import { useTranslation } from "next-i18next";

const DesktopNav = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <div className={styles.nav}>
      {NavLinks.map((link) => {
        const { title, sublinks, type } = link;
        const href = convertToHref(t(link.href));

        if (type === "dropdown") {
          return (
            <div key={href} className={styles.dropdown}>
              <span className={activeLink(t(sublinks[0]))}>
                {t(title)}
                <IcomoonReact
                  iconSet={iconSet}
                  color="#111"
                  size={13}
                  icon="dropdown"
                />
              </span>
              <DropdownLinks sublinks={sublinks} href={href} styles={styles} />
            </div>
          );
        } else {
          return (
            <div
              className={`${styles.dropdown} ${
                styles[activeLink(router.asPath, href)]
              }`}
              key={href}
            >
              <Link href={`/${href}`}>{t(title)}</Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default DesktopNav;

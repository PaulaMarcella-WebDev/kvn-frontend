import { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import styles from "@/styles/MobileNavbar.module.scss";
import NavLinks from "@/data/nav-links";
import iconSet from "@/icons/selection.json";
import DropdownLinks from "./DropdownLinks";
import { convertToHref, activeLink } from "@/helpers";

import IcomoonReact, { iconList } from "icomoon-react"; // remove iconlist for production
import { useTranslation } from "next-i18next";

import { motion, AnimatePresence } from "framer-motion";

const MobileNav = ({ isOpen }) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [dropdownOpen, setDropdownOpen] = useState({});
  const toggleDropdown = (href) => {
    setDropdownOpen({ [href]: !dropdownOpen[href] });
  };
  const variants = {
    hidden: {
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      height: "100vh",
      transition: {
        duration: 0.3,
        when: "beforeChildren"
      }
    }
  };
  const childVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobilenav"
          className={`${styles.nav} ${isOpen ? styles.isOpen : " "}`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          {NavLinks.map((link) => {
            const { type, title, sublinks } = link;
            const href = convertToHref(t(link.href));
            if (type === "dropdown") {
              return (
                <motion.div
                  key={href}
                  className={styles.dropdown}
                  variants={childVariants}
                >
                  <span
                    className={styles[activeLink(router.asPath, href)]}
                    onClick={() => toggleDropdown(href)}
                  >
                    {t(title)}
                    <IcomoonReact
                      iconSet={iconSet}
                      color="#111"
                      size={13}
                      icon="chevron-down"
                    />
                  </span>
                  {dropdownOpen[href] && (
                    <DropdownLinks
                      sublinks={sublinks}
                      href={href}
                      styles={styles}
                    />
                  )}
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  className={`${styles.dropdown} ${
                    styles[activeLink(router.asPath, href)]
                  }`}
                  key={href}
                  variants={childVariants}
                >
                  <Link href={`/${href}`}>{t(title)}</Link>
                </motion.div>
              );
            }
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;

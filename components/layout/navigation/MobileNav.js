import { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import styles from "../../../styles/MobileNavbar.module.scss";
import NavLinks from "../../../data/nav-links";
import iconSet from "../../../icons/selection.json";
import DropdownLinks from "./DropdownLinks";

import IcomoonReact, { iconList } from "icomoon-react"; // remove iconlist for production
import { useTranslation } from "next-i18next";

import { motion, AnimatePresence } from "framer-motion";

const MobileNav = ({ isOpen }) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const activeLink = (href) => {
    return router.asPath === "/" + href ? styles.active : "";
  };
  const [dropdownOpen, setDropdownOpen] = useState({});
  const toggleDropdown = (title) => {
    setDropdownOpen({ [title]: !dropdownOpen[title] });
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
            if (link.type === "dropdown") {
              return (
                <motion.div
                  key={link.title}
                  className={styles.dropdown}
                  variants={childVariants}
                >
                  <span
                    className={activeLink(t(link.sublinks[0].href))}
                    onClick={() => toggleDropdown(link.title)}
                  >
                    {t(link.title)}
                    <IcomoonReact
                      iconSet={iconSet}
                      color="#111"
                      size={13}
                      icon="chevron-down"
                    />
                  </span>
                  {dropdownOpen[link.title] && (
                    <DropdownLinks sublinks={link.sublinks} styles={styles} />
                  )}
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  className={`${styles.dropdown} ${activeLink(t(link.href))}`}
                  key={link.title}
                  variants={childVariants}
                >
                  <Link href={`/${t(link.href)}`}>{t(link.title)}</Link>
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

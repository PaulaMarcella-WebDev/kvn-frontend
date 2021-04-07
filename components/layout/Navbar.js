import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

import { useTranslation } from "next-i18next";

const Navbar = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.navbar}>
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
      <ul className="navlinks">
        <li className={styles.navlink}>
          <Link href="#">{t("company-navlink")}</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="#">{t("services-navlink")}</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="#">{t("sales-navlink")}</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="#">{t("contact-navlink")}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

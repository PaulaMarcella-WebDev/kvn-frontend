import Link from "next/link";
import styles from "@/styles/Footer.module.scss";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("common");
  const copyrightText = `© ${new Date().getFullYear()} ${t(
    "footer-company-title"
  )}`;
  return (
    <footer className={styles.footer}>
      <div className={styles.main}></div>
      <div className={styles.copyright}>
        <p>{copyrightText}</p>
        <p className={styles.link}>
          <Link href={`/${t("footer-imprint").toLowerCase()}`}>
            {t("footer-imprint")}
          </Link>
        </p>
        <p className={styles.link}>
          <Link href={`/${t("footer-privacy").toLowerCase()}`}>
            {t("footer-privacy")}
          </Link>
        </p>
        <p className={styles.link}>
          <Link href={`/${t("footer-cookies").toLowerCase()}`}>
            {t("footer-cookies")}
          </Link>
        </p>
        <p className={styles.link}>
          <Link href={`/${t("footer-terms").toLowerCase()}`}>
            {t("footer-terms")}
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

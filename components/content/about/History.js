import styles from "@/styles/History.module.scss";
import { useTranslation } from "next-i18next";

const History = () => {
  const { t } = useTranslation(["about", "common"]);
  return (
    <section id={t("common:href-history")}>
      <h2 className="title title-center">{t("history-title")}</h2>
      <hr className="hr" />
      <div className={styles.timeline}>
        <span className={styles.circle}></span>
        <div className={styles.item}>
          <h3 className={styles.year}>{t("history-1961")}</h3>
          <p className={styles.text}>{t("history-1961-text")}</p>
        </div>
        <span className={styles.circle}></span>
        <div className={styles.item}>
          <h3 className={styles.year}>{t("history-1986")}</h3>
          <p className={styles.text}>{t("history-1986-text")}</p>
        </div>
        <span className={styles.circle}></span>
        <div className={styles.item}>
          <h3 className={styles.year}>{t("history-1993")}</h3>
          <p className={styles.text}>{t("history-1993-text")}</p>
        </div>
        <span className={styles.circle}></span>
        <div className={styles.item}>
          <h3 className={styles.year}>{t("history-2001")}</h3>
          <p className={styles.text}>{t("history-2001-text")}</p>
        </div>
        <span className={styles.circle}></span>
        <div className={styles.item}>
          <h3 className={styles.year}>{t("history-2009")}</h3>
          <p className={styles.text}>{t("history-2009-text")}</p>
        </div>
      </div>
    </section>
  );
};

export default History;

import styles from "@/styles/Numbers.module.scss";
import { useTranslation } from "next-i18next";

const Numbers = () => {
  const { t } = useTranslation(["about", "common"]);

  return (
    <section id={t("common:href-numbers")}>
      <div className="container">
        <h2 className="title title-center">{t("numbers-title")}</h2>
        <hr className="hr" />
        <div className={styles.numbers}>
          <div className={styles.box}>
            <p>ICON</p>
            <p>
              <span>{t("numbers-num1")}</span>
            </p>
            <p>{t("numbers-num1-text")}</p>
          </div>
          <div className={styles.box}>
            <p>ICON</p>
            <p>
              <span>{t("numbers-num2")}</span>
            </p>
            <p>{t("numbers-num2-text")}</p>
          </div>
          <div className={styles.box}>
            <p>ICON</p>
            <p>
              <span>{t("numbers-num3")}</span>
            </p>
            <p>{t("numbers-num3-text")}</p>
          </div>
        </div>
        <p className={styles.year}>
          <small>
            <em>{t("numbers-year")}</em>
          </small>
        </p>
      </div>
    </section>
  );
};

export default Numbers;

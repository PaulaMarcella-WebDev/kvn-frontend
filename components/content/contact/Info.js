import styles from "@/styles/Info.module.scss";
import { useTranslation } from "next-i18next";

import iconSet from "@/icons/selection.json";
import IcomoonReact, { iconList } from "icomoon-react"; // remove iconlist for production

const Info = () => {
  const { t } = useTranslation(["common", "contact"]);
  return (
    <section id={t("contact:contact-title")}>
      <div className="container">
        <div className={styles.info}>
          <h1 className="title">{t("contact:info-title")}</h1>
          <div>
            <div className={styles.iconbox}>
              <IcomoonReact iconSet={iconSet} size={50} icon="phone-feather" />
              <p className={styles.text}>
                <span>{t("contact-phone")}</span>
              </p>
            </div>
            <div className={styles.iconbox}>
              <IcomoonReact iconSet={iconSet} size={50} icon="mail-feather" />
              <p className={styles.text}>
                <span>{t("contact-email")}</span>
              </p>
            </div>
            <div className={styles.iconbox}>
              <IcomoonReact
                iconSet={iconSet}
                size={50}
                icon="location-feather"
              />
              <p className={styles.text}>
                <span>{t("contact-address")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;

import styles from "@/styles/Info.module.scss";
import { useTranslation } from "next-i18next";

import iconSet from "@/icons/selection.json";
import IcomoonReact from "icomoon-react";

const Info = () => {
  const { t } = useTranslation(["common", "contact"]);
  return (
    <section id={t("contact:contact-title")}>
      <div className="container">
        <h2 className="section-heading">
          <span>{t("contact:contact-title")}</span>
        </h2>
        <h2 className="title">{t("contact:info-title")}</h2>
        <div className={styles.info}>
          <div className={styles.boxes}>
            <div className={styles.iconbox}>
              <div className={styles.icon}>
                <IcomoonReact iconSet={iconSet} icon="phone-fill" />
              </div>
              <p className={styles.text}>
                <span>{t("info-phone")}</span>
              </p>
            </div>
            <div className={styles.iconbox}>
              <div className={styles.icon}>
                <IcomoonReact iconSet={iconSet} icon="mail-fill" />
              </div>
              <p className={styles.text}>
                <span>{t("info-email")}</span>
              </p>
            </div>
            <div className={styles.iconbox}>
              <div className={styles.icon}>
                <IcomoonReact iconSet={iconSet} icon="marker-fill" />
              </div>
              <p className={styles.text}>
                <span>{t("info-address")}</span>
              </p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.598382639007!2d7.950010315523789!3d52.30514355988253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9e7a84db86ead%3A0x1d95f23a64d44d4c!2sKVN%20Autokrane%20GmbH!5e0!3m2!1sen!2spt!4v1619171061579!5m2!1sen!2spt"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Info;

import React from "react";
import styles from "../../styles/Topnav.module.scss";
import { useTranslation } from "next-i18next";

const Topnav = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.topnav}>
      <p>{t("info-address")}</p>
      <div>
        <p>{t("info-email")}</p>
        <p>{t("info-phone")}</p>
      </div>
    </div>
  );
};

export default Topnav;

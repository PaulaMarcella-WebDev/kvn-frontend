import styles from "@/styles/Topnav.module.scss";
import { useTranslation } from "next-i18next";

import iconSet from "@/icons/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const Topnav = () => {
  const { t } = useTranslation("common");
  //console.log(iconList(iconSet));
  return (
    <div className={styles.topnav}>
      <p>{t("info-address")}</p>
      <div>
        <p>
          <IcomoonReact iconSet={iconSet} color="#111" size={20} icon="mail" />
          <span>{t("info-email")}</span>
        </p>
        <p>
          <IcomoonReact
            iconSet={iconSet}
            color="#111"
            size={14}
            icon="phone-feather"
          />
          <span>{t("info-phone")}</span>
        </p>
      </div>
    </div>
  );
};

export default Topnav;

import styles from "@/styles/Intro.module.scss";
import { useTranslation } from "next-i18next";
import InfoBox from "@/layout/InfoBox";

import iconSet from "@/icons/selection.json";
import IcomoonReact from "icomoon-react";

const Intro = () => {
  const { t } = useTranslation(["about"]);
  return (
    <section id={t("title")}>
      <div className="container">
        <h1 className="section-heading">
          <span>{t("page-title")}</span>
        </h1>
        <div className={styles.intro}>
          <div>
            <p className={styles.listtitle}>{t("list-title")}</p>
            <ul className={styles.list}>
              <li>
                <IcomoonReact
                  iconSet={iconSet}
                  size={20}
                  icon="chevron-right"
                />
                {t("list-li4")}
              </li>
              <li>
                <IcomoonReact
                  iconSet={iconSet}
                  size={20}
                  icon="chevron-right"
                />
                {t("list-li2")}
              </li>
              <li>
                <IcomoonReact
                  iconSet={iconSet}
                  size={20}
                  icon="chevron-right"
                />
                {t("list-li3")}
              </li>
              <li>
                <IcomoonReact
                  iconSet={iconSet}
                  size={20}
                  icon="chevron-right"
                />
                {t("list-li1")}
              </li>
            </ul>
          </div>
          <div>
            <p className="text-last">{t("intro-p1")}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <InfoBox title={t("infobox-hbb-title")} text={t("infobox-hbb-text")} />
      </div>
    </section>
  );
};

export default Intro;

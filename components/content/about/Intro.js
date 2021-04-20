import { useTranslation } from "next-i18next";
import InfoBox from "@/layout/InfoBox";

const Intro = () => {
  const { t } = useTranslation(["about"]);
  return (
    <section id={t("title")}>
      <div className="container">
        <h1 className="section-heading">
          <span>{t("page-title")} </span>
        </h1>
        <h2 className="title">{t("intro-h1")}</h2>
        <p className="text">{t("intro-p1")}</p>
        <p className="text-last">{t("intro-p2")}</p>
      </div>
      <div className="container">
        <InfoBox title={t("infobox-hbb-title")} text={t("infobox-hbb-text")} />
      </div>
    </section>
  );
};

export default Intro;

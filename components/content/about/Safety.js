import { useTranslation } from "next-i18next";

const Safety = () => {
  const { t } = useTranslation(["about"]);
  return (
    <section id={t("common:href-safety")}>
      <div className="container">
        <div className="section-heading">
          <span>{t("safety-title")}</span>
        </div>
        <p className="text">{t("safety-p1")}</p>
        <p className="text">{t("safety-p2")}</p>
        <p className="text">{t("safety-p3")}</p>
      </div>
    </section>
  );
};

export default Safety;

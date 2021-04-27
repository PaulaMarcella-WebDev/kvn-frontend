import Layout from "@/layout/Layout";
import Mobilecranes from "@/content/services/Mobilecranes";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Services = () => {
  const { t } = useTranslation(["services", "common"]);
  return (
    <Layout metaTitle={t("services-title")}>
      <section id={t("services-title")}>
        <div id={t("common:href-mobilecranes")} className="container">
          <h1 className="section-heading">
            <span>{t("common:sublink-mobilecranes")}</span>
          </h1>
          <h2 className="title">{t("mobilecranes-h1")}</h2>
          <p className="text">{t("mobilecranes-p1")}</p>
          <Mobilecranes />
        </div>
        <div id={t("common:href-heavyloads")} className="container">
          <h1 className="section-heading">
            <span>{t("common:sublink-heavyloads")}</span>
          </h1>
          <h2 className="title">{t("heavyloads-h1")}</h2>
          <p className="text">{t("heavyloads-p1")}</p>
        </div>
        <div id={t("common:href-platforms-forklifts")} className="container">
          <h1 className="section-heading">
            <span>{t("common:sublink-platforms-forklifts")}</span>
          </h1>
          <h2 className="title">{t("platforms-forklifts-h1")}</h2>
          <p className="text">{t("platforms-forklifts-p1")}</p>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["services", "common"]))
  }
});

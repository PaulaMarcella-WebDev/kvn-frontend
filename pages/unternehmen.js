import Head from "next/head";
import Layout from "@/layout/Layout";
import PageHeader from "@/layout/PageHeader";
import InfoBox from "@/layout/InfoBox";

import Numbers from "@/content/about/Numbers";
import Team from "@/content/about/Team";
import History from "@/content/about/History";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const headerImg = "/headers/unternehmen.jpg";

const About = () => {
  const { t } = useTranslation(["about", "common"]);
  return (
    <>
      <Head>
        <title>{t("page-title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section id={t("title")}>
          <PageHeader img={headerImg} />
          <div className="container">
            <h1 className="section-heading">
              <span>{t("page-title")} </span>
            </h1>
            <h2 className="title">{t("intro-h1")}</h2>
            <p className="text">{t("intro-p1")}</p>
            <p className="text">{t("intro-p2")}</p>
          </div>
          <div className="container">
            <InfoBox
              title={t("infobox-hbb-title")}
              text={t("infobox-hbb-text")}
            />
          </div>
        </section>
        <Numbers />
        <Team />
        <History />
      </Layout>
    </>
  );
};

export default About;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["about", "common"]))
  }
});

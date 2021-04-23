import Head from "next/head";
import Layout from "@/layout/Layout";
import PageHeader from "@/layout/PageHeader";

import Intro from "@/content/about/Intro";
import Numbers from "@/content/about/Numbers";
import History from "@/content/about/History";
import Safety from "@/content/about/Safety";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const headerImg = "/headers/unternehmen.jpg";

const About = () => {
  const { t } = useTranslation(["about", "common"]);
  return (
    <>
      <Layout metaTitle={t("about-title")}>
        <PageHeader img={headerImg} />
        <Intro />
        <Safety />
        <Numbers />
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

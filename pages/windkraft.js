import Head from "next/head";
import Layout from "@/layout/Layout";
import PageHeader from "@/layout/PageHeader";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const headerImg = "/headers/unternehmen.jpg";

const About = () => {
  const { t } = useTranslation(["services", "common"]);
  return (
    <>
      <Layout metaTitle={t("services-title")}></Layout>
    </>
  );
};

export default About;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["about", "common"]))
  }
});

import Head from "next/head";
import Layout from "@/layout/Layout";
import PageHeader from "@/layout/PageHeader";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Team from "@/content/contact/Team";
import Info from "@/content/contact/Info";
const headerImg = "/headers/bluesky-header.jpg";

const Contact = () => {
  const { t } = useTranslation(["contact"]);
  return (
    <>
      <Head>
        <title>{t("contact-title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeader img={headerImg} />
        <Info />
        <Team />
      </Layout>
    </>
  );
};

export default Contact;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["contact", "common"]))
  }
});

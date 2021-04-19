import Head from "next/head";
import Layout from "@/layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const Services = () => {
  const { t } = useTranslation(["services"]);
  return (
    <>
      <Head>
        <title>{t("services-title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section id={t("services-title")}>
          <div className="container">
            <h1>{t("services-intro-h1")}</h1>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["services", "common"]))
  }
});

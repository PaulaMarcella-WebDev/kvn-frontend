import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const About = () => {
  const { t } = useTranslation(["about"]);
  return (
    <>
      <Head>
        <title>{t("about-title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section id={t("about-title")}>
          <div className="container">
            <h1>{t("about-intro-h1")}</h1>
          </div>
        </section>
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

import Head from "next/head";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("head-home-title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <section id="intro">
          <div className="container">
            <h1>{t("home-intro-h1")}</h1>
            <p>{t("home-intro-p1")}</p>
            <p>{t("home-intro-p2")}</p>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"]))
  }
});

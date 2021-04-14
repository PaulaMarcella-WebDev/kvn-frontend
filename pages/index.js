import Head from "next/head";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import Card from "../components/layout/Card";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Home = () => {
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
          <div className="container dark-bg">
            <h1>Beispiele</h1>
            <button className="btn">Button Beispiel</button>
            <button className="btn outline">Button Outline</button>
            <Card />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"]))
  }
});

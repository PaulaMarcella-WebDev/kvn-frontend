import Head from "next/head";
import Header from "@/layout/Header";
import Layout from "@/layout/Layout";

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
            <h1 className="section-heading">
              <span>Abschnitt Überschrift</span>
            </h1>
            <h2 className="title">Beispiele</h2>
            <button className="btn">Button Beispiel</button>
            <button className="btn outline">Button Outline</button>
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

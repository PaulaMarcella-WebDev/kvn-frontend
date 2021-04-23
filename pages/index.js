import Head from "next/head";
import Header from "@/layout/Header";
import Layout from "@/layout/Layout";
import Card from "@/layout/Card";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Home = () => {
  const { t } = useTranslation(["home", "common"]);
  return (
    <>
      <Head>
        <title>{t("head-home-title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <section id="home">
          <div className="container">
            <h1 className="section-heading">
              <span>{t("common:company-official-name")}</span>
            </h1>
            <h2 className="title">{t("home-intro-h1")}</h2>
            <p className="text">{t("home-intro-p1")}</p>
            <p className="text">{t("home-intro-p2")}</p>
          </div>
          <div className="container dark-bg">
            <div className="card-grid">
              <Card photo={"fleet-card.jpg"}>
                <h5 className="title">{t("fleet-box-title")}</h5>
                <p className="text">{t("fleet-box-text")}</p>
                <button className="btn outline fluid">Button Outline</button>
              </Card>
              <Card photo={"contact-card.jpeg"}>
                <h5 className="title">{t("contact-box-title")}</h5>
                <p className="text">{t("contact-box-text")}</p>
                <button className="btn outline fluid">Button Outline</button>
              </Card>
            </div>
            <h1 className="section-heading">
              <span>Abschnitt Überschrift</span>
            </h1>
            <h2 className="title">Beispiele</h2>
            <button className="btn">Button Beispiel</button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home", "common"]))
  }
});

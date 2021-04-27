import Link from "next/link";

import Header from "@/layout/Header";
import Layout from "@/layout/Layout";
import Card from "@/layout/Card";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Home = () => {
  const { t } = useTranslation(["home", "common"]);
  return (
    <>
      <Layout metaTitle={t("home-title")}>
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
                <h3 className="title">{t("fleet-box-title")}</h3>
                <p className="text">{t("fleet-box-text")}</p>
                <Link href={`/${t("common:href-fleet")}`}>
                  <a className="btn outline fluid">
                    {t("common:sublink-fleet")}
                  </a>
                </Link>
              </Card>
              <Card photo={"contact-card.jpeg"}>
                <h3 className="title">{t("contact-box-title")}</h3>
                <p className="text">{t("contact-box-text")}</p>
                <Link href={`/${t("common:href-contact")}`}>
                  <a className="btn outline fluid">
                    {t("common:navlink-contact")}
                  </a>
                </Link>
              </Card>
            </div>
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

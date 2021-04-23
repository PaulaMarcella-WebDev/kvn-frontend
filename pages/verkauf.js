import Head from "next/head";
import Layout from "@/layout/Layout";
import PageHeader from "@/layout/PageHeader";
import Card from "@/layout/Card";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const headerImg = "/headers/unternehmen.jpg";
const Sales = () => {
  const { t } = useTranslation(["sales"]);
  return (
    <>
      <Layout metaTitle={t("sales-title")}>
        <PageHeader img={headerImg} />
        <section id={t("sales-title")}>
          <div className="container">
            <h2 className="section-heading">
              <span>{t("sales-title")}</span>
            </h2>
            <h1 className="title">{t("sales-intro-h1")}</h1>
            <p className="text">{t("sales-intro-p1")}</p>
            <p className="text">{t("sales-intro-p2")}</p>
          </div>
          <div className="container dark-bg card-grid">
            <Card photo={"verkaufskran.jpg"}>
              <h3>LIEBHERR LTM 11200-9.1</h3>
              <ul>
                <li>
                  Teleskopausleger T3: 19,9 m – 55,0 m, inkl. T3-Adapter und
                  T3-Kopf (363 t) mit 4 Transportkonsolen
                </li>
                <li>
                  Wippbare Gitterspitze von 114,0 m mit Anbauteilen zum
                  Festanbau
                </li>
                <li>
                  T7-Adapter zum Anbau der festen Gitterspitze am 100 m –
                  Ausleger – mit hydraulischer Verstellung
                </li>
                <li>
                  Teleskopauslegerverlängerung 10 m (V2), Exzenter 6 m (VE)
                </li>
                <li>Y-Teleskopauslegerabspannung</li>
                <li>
                  Hubwerk 2, Verstellwinde für wippbare Gitterspitze (Winde 3)
                </li>
                <li>
                  Hakenflaschen: 227 t (7 Rollen), 112 t (3 Rollen), 50 t (1
                  Rolle)
                </li>
                <li>Mastnase: 65 t</li>
              </ul>
            </Card>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Sales;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["sales", "common"]))
  }
});

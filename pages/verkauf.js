import Head from "next/head";
import Layout from "@/layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const Sales = () => {
  const { t } = useTranslation(["sales"]);
  return (
    <>
      <Head>
        <title>{t("sales-title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section id={t("sales-title")}>
          <div className="container">
            <h1>{t("sales-intro-h1")}</h1>
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

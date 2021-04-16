import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const Contact = () => {
  const { t } = useTranslation(["contact"]);
  return (
    <>
      <Head>
        <title>{t("contact-title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section id={t("contact-title")}>
          <div className="container">
            <h1>{t("contact-intro-h1")}</h1>
          </div>
        </section>
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

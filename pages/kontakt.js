import Head from "next/head";
import Layout from "@/layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ContactForm from "@/content/about/contact/ContactForm";
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
        <ContactForm />
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

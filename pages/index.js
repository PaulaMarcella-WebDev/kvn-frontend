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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <div className="container">
          <h1>Welcome to kvn</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos rerum
            totam, explicabo reiciendis voluptate exercitationem molestiae
            debitis sit ad officia?
          </p>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"]))
  }
});

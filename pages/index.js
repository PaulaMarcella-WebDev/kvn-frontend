import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1>Welcome to kvn</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos rerum
          totam, explicabo reiciendis voluptate exercitationem molestiae debitis
          sit ad officia?
        </p>
      </div>
    </Layout>
  );
}

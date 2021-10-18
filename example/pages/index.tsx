import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import ReactNotionTable from "react-notion-table";

// const ReactNotionTableWithoutSSR = dynamic<ReactNotionTableProps>(
//   () => import("react-notion-table"),
//   {
//     ssr: false,
//     loading: () => <p>loading...</p>,
//   }
// );

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ReactNotionTable</title>
        <meta
          name="description"
          content="React Table Component Mimic for Notion"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to ReactNotionTable</h1>
        <ReactNotionTable name={'test user'} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

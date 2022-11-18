import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BAD HABITS</title>
        <meta name="description" content="Bad Habits events webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <h1 className="text-3xl font-bold underline">BAD HABITS</h1>
      </main>

      <footer className={styles.footer}>
        <p>this is footer</p>
      </footer>
    </div>
  );
}

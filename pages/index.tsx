import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Something Something Slay</title>
      </Head>
      <h1>VOTE FOR MOST SLAY</h1>
      <p>
        Vote for which of the two displayed pokemon (or something else) is the
        most slay
      </p>
    </div>
  );
}

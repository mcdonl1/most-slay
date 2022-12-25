import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Something Something Slay</title>
      </Head>
      <div className={styles.container}>
        <h1>VOTE FOR MOST SLAY</h1>
        <p>
          Vote for which of the two displayed pokemon (or something else) is the
          most slay
        </p>
        <div className="voting-pane">
          <div className="card">
            <h2>Candidate 1</h2>
          </div>
          <div className="card">
            <h2>Candidate </h2>
          </div>
        </div>
      </div>
    </>
  );
}

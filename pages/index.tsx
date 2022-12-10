import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

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
          <div
            className="card"
            onClick={() => {
              alert("lol u voted for a template");
            }}
          >
            <h2>Candidate 1</h2>
          </div>
          <div
            className="card"
            onClick={() => {
              alert("Click here if u are a silly goose");
            }}
          >
            <h2>Candidate 2</h2>
          </div>
        </div>
      </div>
    </>
  );
}

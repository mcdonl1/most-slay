import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

export default function Results() {
  return (
    <>
      <Head>
        <title>Something Something Slay</title>
      </Head>
      <div className={styles.container}>
        <h1>SEE BELOW FOR MOST SLAY</h1>
        <p>
          You voted on something and look what you've done (this will be more of
          a list in the future)
        </p>
        <div className="voting-pane">
          <div className="results-card">
            <h2>Candidate 1</h2>
            <p className="description">6000%</p>
          </div>
          <div className="results-card">
            <h2>Candidate 2</h2>
            <p className="description">6001%</p>
          </div>
        </div>
      </div>
    </>
  );
}

// app/page.tsx

"use client";

import { useLiff } from "./liff/LiffProvider";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
  const { liff, liffError } = useLiff();

  return (
    <div>
      <Head>
        <title>LIFF App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>LIFF APP</h1>
        {liff && <p>LIFF init succeeded.</p>}
        <p>LIFF ID: {liff && liff.id}</p>
        {liffError && (
          <>
            <p>LIFF init failed.</p>
            <p>
              <code>{liffError}</code>
            </p>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;

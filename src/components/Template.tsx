/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import styles from "../../styles/Home.module.css";
import Head from "next/head";

const Template = ({
  pageTitle,
  children,
}: {
  children: React.ReactNode;
  pageTitle: string;
}) => (
  <div className={styles.container}>
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://meedu.app">Meedu.app!</a>
      </h1>
      {children}
    </main>

    <footer className={styles.footer}>
      <a href="https://meedu.app" target="_blank" rel="noopener noreferrer">
        Powered by meedu.app
      </a>
    </footer>
  </div>
);

export default Template;

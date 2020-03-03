import React from "react";
import App from "../components/App";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Rokkit.ts - Framework</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <App />
    </>
  );
};

export default Home;

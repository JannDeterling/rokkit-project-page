import React from "react";
import App from "../components/App";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>Rokkit.ts - Framework</title>
      </Head>
      <App />
    </>
  );
};

export default Home;

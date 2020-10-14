/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { AppProps } from "next/app";
import "../../styles/globals.css";
import { initDependencies } from "../libs/dependency-injection";
import "antd/dist/antd.css";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  initDependencies();
  return <Component {...pageProps} />;
};

export default MyApp;

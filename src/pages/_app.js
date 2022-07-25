import React from "react";
import Head from "next/head";
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);


export default function App({ Component, pageProps }) {

  return (
    <>
        <Head>
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
            />
        </Head>
        <AmplifyProvider>
        <Component {...pageProps} />
        </AmplifyProvider>
    </>
  );
}
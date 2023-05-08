import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react';

import Head from "next/head";

import Footer from "@/hoc/layout/Footer";
import Loader from "@/hoc/layout/Loader";
import Navbar from "@/hoc/layout/Navbar";

import store from '@/store/store';

import "@/styles/style.map.scss";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>

      <Loader />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
    </SessionProvider>
  );
}

import Head from "next/head";
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react';

import Toast from '@/hoc/toast/Toast';
import Loader from '@/components/layout/Loader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
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
      <Toast/>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
    </SessionProvider>
  );
}

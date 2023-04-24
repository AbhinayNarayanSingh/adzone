import Head from "next/head";

import Dialog from "@/hoc/layout/Dialog";
import Drawer from "@/hoc/layout/Drawer";
import Footer from "@/hoc/layout/Footer";
import Loader from "@/hoc/layout/Loader";
import Navbar from "@/hoc/layout/Navbar";

import "@/styles/style.map.scss";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>

      <Loader />
      <Drawer />
      <Dialog />
      {/* <Navbar /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

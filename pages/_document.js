import { PROJECT_DESCRIPTION, PROJECT_NAME } from "@/Environment";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={PROJECT_DESCRIPTION} />
      </Head>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      ></link>
      <body>
        <Main />
        <NextScript />
        <div id="drawer"></div>
        <div id="dialog"></div>
      </body>
    </Html>
  );
}

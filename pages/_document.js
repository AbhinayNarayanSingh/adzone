import { PROJECT_DESCRIPTION } from "@/Environment";
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

      <script async defer src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_KEY}&libraries=places`} />

      <body>
        <Main />
        <NextScript />
        <div id="toast"></div>
        <div id="drawer"></div>
        <div id="dialog"></div>
      </body>
    </Html>
  );
}

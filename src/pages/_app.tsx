import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/layout/Layout";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Real Estate E-commerce" />
        <meta name="author" content="Nhà phố sài gòn" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          html {
            font-family: ${beVietnam.style.fontFamily};
          }
        `}</style>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

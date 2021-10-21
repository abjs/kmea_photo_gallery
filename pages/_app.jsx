import "../styles/globals.css";
import "../styles/main.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="Description"
          content="Author:Abin Joseph, Illustrator: KMEA, Category: Photo Galaxy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta
          name="keywords"
          content="Abin,Abin Joseph,YASIN MEHMOOD MK,shal"
        />
        <meta name="author" content="Abin Joseph" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

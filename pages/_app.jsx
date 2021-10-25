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
          content="KMEA , KMEA Engineering College , KMEA PHOTO GALLERY"
        />
        <meta name="author" content="Abin Joseph" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="6MS1hQ67jC9zPO38hXm7njrs8pojzwASFcz3h9xX_Oc" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import '../styles/globals.css'
import '../styles/home.css'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="Description" CONTENT="Author:Abin Joseph, Illustrator: Kaade, Category: Fun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="keywords" content="Kaade,abin,Abin Joseph,YASIN MEHMOOD MK,shal" />
        <meta name="author" content="Abin Joseph"/>
        <meta name="robots" content="index, follow" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

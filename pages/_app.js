import '../styles/globals.css'
import '../styles/home.css'
import Head from 'next/head';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [link, setLink] = useState("/")
  return (
    <>
      <Head>
        <title>Kmea Photo Gallery</title>
        <meta charset="utf-8" />
        <meta name="Description" CONTENT="Author:Abin Joseph, Illustrator: Kaade, Category: Fun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="keywords" content=" abin,Abin,Kmea Photo Gallery,abin,Abin Joseph,YASIN MEHMOOD MK,shal" />
        <meta name="author" content="Abin Joseph"/>
        <meta name="robots" content="index, follow" />
      </Head>
      <Component {...pageProps} link={link} setLink={setLink} />
    </>
  )
}

export default MyApp

/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import cuid from "cuid";
import { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import Zoom from 'react-reveal/Zoom';
import data from "../data";
export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Kmea Photo Gallery</title>
        <meta name="description" content="Kmea  photo Galaxy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center h-screen w-screen bg-kmea-bg-image bg-cover bg-center ">
        <div className="h-[95vh] w-full  grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center justify-items-center  overflow-x-hidden srollbar px-3">
          {Object.keys(data).map((name) => (
            <div key={cuid()}>
              <Link href={`/${name}`}>
                <a className="">
                  <Fade>
                    <img
                      src={`/${name}/1.jpg`}
                      alt={`${name} 1 th pic`}
                      className=" h-72 object-contain self-center  shadow-2xl  rounded-[40px]"
                    />
                  </Fade>
                </a>
              </Link>
              <Link href={`/${name}`}>
                <a className="">
                  <Zoom cascade delay={500} >
                    <p className="animate-pulse p-2 mt-2 bg-black text-xl font-bold text-white uppercase shadow-xl rounded-xl text-center hover:animate-bounce">
                      {name}
                    </p>
                  </Zoom>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

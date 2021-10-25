import Head from "next/head";
import data from "../data";
import { useRouter } from "next/router";
import cuid from "cuid";
import { useEffect, useState } from "react";
import Link from "next/link";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-awesome-reveal";
export default function Main() {
  const router = useRouter();
  const [name, setName] = useState(router.query.name);
  useEffect(() => {
    setName(router.query.name);
  }, [router.query.name]);
  const [pic, setPic] = useState([]);
  useEffect(() => {
    const NumberOfPhotos = data["thaniya"]?.NumberOfPhotos;
    let items = [];
    for (let i = 1; i <= NumberOfPhotos; i++) {
      items.push(
        <Fade delay={500}>
          <img
            key={cuid()}
            src={`/thaniya/${i}.jpg`}
            alt={`thaniya images ${i}`}
            className="w-full rounded-[50px] h-full xl:h-[80vh] object-contain"
          />
        </Fade>
      );
    }
    setPic(items);
  }, [name]);
  return (
    <div className="name__app">
      <Head>
        <title>Thaniya</title>
        <meta name="description" content={`Photo of thaniya`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center flex justify-between capitalize w-full bg-black p-4 text-white font-medium  h-[10vh] text-xl">
        <Link href="/">
          <a className="w-16  h-16 bg-white">
            <img src="/back.png" alt="Back arrow" className="h-14" />
          </a>
        </Link>
        <div className="pl-2">
          <Zoom cascade delay={500}>
            <h1>
              {data["thaniya"]?.fname} {data["thaniya"]?.lname}
            </h1>
          </Zoom>
          <Zoom cascade delay={500}>
            <p>{data["thaniya"]?.dept} School</p>
          </Zoom>
        </div>
        <div />
      </div>
      <div className="grid justify-center w-screen gap-5 p-5 items-center h-[90vh] overflow-x-hidden xl:grid-cols-2 ">
        {pic}
      </div>
    </div>
  );
}

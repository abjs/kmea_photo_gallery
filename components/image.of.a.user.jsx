import Head from "next/head";
import data from "../data";
import cuid from "cuid";
import { useEffect, useState } from "react";
import Link from "next/link";
import Zoom from 'react-reveal/Zoom';
import { Fade } from "react-awesome-reveal";
export default function UserImageComponent({ name }) {
    const [pic, setPic] = useState([]);
    useEffect(() => {
        const NumberOfPhotos = data[`${name}`]?.NumberOfPhotos;
        let items = [];
        for (let i = 1; i <= NumberOfPhotos; i++) {
            items.push(
                <Fade delay={500}>
                    <img
                        key={cuid()}
                        src={`/${name}/${i}.jpg`}
                        alt={`${name} images ${i}`}
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
                <title>{name}</title>
                <meta name="description" content={`Photo of ${name}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className="text-center flex justify-between capitalize w-full bg-black p-4 text-white font-medium  h-[10vh] text-xl">
                <Link href="/">
                    <a className="w-16  h-16 bg-white">
                        <img src="/back.png" alt="Back arrow" className="h-14" />
                    </a>
                </Link>
                <div className="pl-2">
                    <Zoom cascade delay={500} >
                        <h1>
                            {data[name]?.fname} {data[name]?.lname}
                        </h1>
                    </Zoom>
                    <Zoom cascade delay={500} >
                        <p>department of {data[name]?.dept}</p>
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

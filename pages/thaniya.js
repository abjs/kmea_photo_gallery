import Head from "next/head";
import data from "../data";
import { useRouter } from "next/router";
import cuid from "cuid";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Main() {
  const router = useRouter();
  const [name, setName] = useState(router.query.name);
  useEffect(() => {
    setName(router.query.name);
  }, [router.query.name]);
  const [pic, setPic] = useState([]);
  const [picPhone, setPicPhone] = useState([]);
  let NumberOfPhotos = 0;
  NumberOfPhotos = data["thaniya"]?.NumberOfPhotos;
  useEffect(() => {
    let items = [];
    let itemsPhone = [];
    for (let i = 3; i <= NumberOfPhotos; i++) {
      items.push(
        <img
          key={cuid()}
          src={`/thaniya/${i}.jpg`}
          alt={`thaniya images ${i}`}
        />
      );
    }
    for (let i = 1; i <= NumberOfPhotos; i++) {
      itemsPhone.push(
        <img
          key={cuid()}
          src={`/thaniya/${i}.jpg`}
          alt={`thaniya images ${i}`}
        />
      );
    }
    setPic(items);
    setPicPhone(itemsPhone);
  }, [NumberOfPhotos]);
  return (
    <div className="name__app">
      <Head>
        <title>{name}</title>
        <meta name="description" content={`Photo of thaniya`} />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
          rel="stylesheet"
        />
      </Head>
      <Link href="/">
        <a>
          <button className="back_button">
            <img src="/back.png" alt="Back" />
          </button>
        </a>
      </Link>
      <div className="images desktop">
        <div className="images_left">
          <div className="name">
            <h1>thaniya azhar</h1>
            <p>vidyodaya school</p>
          </div>
          <img
            src={`/thaniya/1.jpg`}
            alt={`thaniya image 1`}
            className="image_name_1"
          />
        </div>
        <img
          src={`/thaniya/2.jpg`}
          alt={`thaniya image 1`}
          className="image_name_1"
        />
      </div>
      <div className="pics desktop">{pic}</div>

      <div className="mobile">
        <div className="name">
          <h1>thaniya azhar</h1>
          <p>vidyodaya school</p>
        </div>
        <div className="photo">{picPhone}</div>
      </div>
    </div>
  );
}

import Head from "next/head";
import Link from "next/link";
import cuid from "cuid";
import data from "../data";
export default function Home() {
  return (
    <div className="main_bg">
      <Head>
        <title>Kmea Photo Gallery</title>
        <meta name="description" content="kade photos" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        {Object.keys(data).map((key) => {
          console.log(key);
          console.log(data[key]);
          return (
            <div key={cuid()}>
              <Link href={`/${key}`}>
                <a>
                  <div className="Main_Page">
                    <img
                      src={`/${key}/1.jpg`}
                      alt={`${data[key].fname} ${data[key].lname}`}
                    />
                  </div>
                  <div className="Name_main">
                    <h3>{`${data[key].fname} ${data[key].lname}`}</h3>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

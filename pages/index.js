import Head from "next/head";
import Image from "next/image";
import LandPage from "@/components/landPage";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kinesiologie Murielle MATHIEU</title>
        <link rel="icon" href="./logo favori.png" type="image/x-icon" />
      </Head>
      <div style={{ height: "100vh", backgroundColor: "red" }}>
        <Menu />
      </div>
    </>
  );
}

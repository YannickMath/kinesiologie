import Link from "next/link";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import styles from "../styles/Menu.module.css";

export default function Menu() {
  const links = {
    id1: "Acceuil",
    id2: "La kinésiologie",
    id3: "Pour quoi ?",
    id4: "Séance",
    id5: "Contact et tarifs",
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Murielle MATHIEU Kinésiologie</title>
        <link rel="icon" href="./logo.png" type="image/x-icon" />
      </Head>
      <div className="bg-green-50 h-1/6 text-gray-500 flex justify-evenly items-center text-4xl font-semibold font-tangerine fixed top-0 w-full z-50 ">
        <img
          className="rounded-[40px] w-80 h-80 fs "
          src="logo.png"
          alt="logo"
        />
        <Link href="/Acceuil" className={styles.link}>
          {links.id1}
        </Link>
        <Link href="/Kinesiologie" className={styles.link}>
          {links.id2}
        </Link>
        <Link href="/Pourquoi" className={styles.link}>
          {links.id3}
        </Link>
        <Link href="/Kinesiologie" className={styles.link}>
          {links.id4}
        </Link>
        <Link href="/Kinesiologie" className={styles.link}>
          {links.id5}
        </Link>
        <Link href="/Kinesiologie" className={styles.link}>
          {links.id6}
        </Link>
      </div>
    </>
  );
}

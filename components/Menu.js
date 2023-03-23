import Link from "next/link";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import styles from "../styles/Menu.module.css";
import { useState, useEffect } from "react";

export default function Menu() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [nomPage, setNomPage] = useState("")

  const links = {
    id1: "Acceuil",
    id2: "Kinésiologie",
    id3: "Pourquoi ?",
    id4: "Reflexologie cranio-sacrée",
    id5: "Nettoyage energétique",
    id6: "A propos de moi",
    id7: "Contact et tarifs",
  };

  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleMediaQueryChange = (e) => setIsSmallScreen(e.matches);
    mediaQuery.addListener(handleMediaQueryChange);

    return () => mediaQuery.removeListener(handleMediaQueryChange);
  }, []);

  const handleSelectPage = (id) => {
    if (isSmallScreen) {
      setNomPage(links[id]);
    }
  };
  
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Muriel MATHIEU Kinésiologie</title>
        <link rel="icon" href="./logo.png" type="image/x-icon" />
      </Head>
      <div className="bg-green-50 md:h-1/6 text-gray-500 flex justify-around md:justify-around items-center text-3xl font-semibold font-tangerine fixed top-0 w-full z-50 ">
        <div className="relative ">
          <img
            className="rounded-md w-40 h-40 md:w-80 md:h-80"
            src="logo.png"
            alt="logo"
            style={{ objectFit: "cover" }}
          />
        </div>
  
        {isSmallScreen && (
          <div className="text-center font-medium text-xxl ">
            <p className="mt-10">Menu</p>
            <p className="text-gray-400 mt-5">{nomPage}</p>
          </div>
        )}
  
        <button
          className="text-3xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <div
          className={`flex flex-col md:flex-row ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link
            href="/Acceuil"
            className={styles.link}
            onClick={() => handleSelectPage("id1")}
          >
            {links.id1}
          </Link>
          <Link
            href="/Kinesiologie"
            className={styles.link}
            onClick={() => handleSelectPage("id2")}
          >
            {links.id2}
          </Link>
          <Link
            href="/Pourquoi"
            className={styles.link}
            onClick={() => handleSelectPage("id3")}
          >
            {links.id3}
          </Link>
          <Link
            href="/Reflexologie"
            className={styles.link}
            onClick={() => handleSelectPage("id4")}
          >
            {links.id4}
          </Link>
          <Link
            href="/NettoyageEnergetique"
            className={styles.link}
            onClick={() => handleSelectPage("id5")}
          >
            {links.id5}
          </Link>
          <Link
            href="/AproposDeMoi"
            className={styles.link}
            onClick={() => handleSelectPage("id6")}
          >
            {links.id6}
          </Link>
          <Link
            href="/ContactsEtTarifs"
            className={styles.link}
            onClick={() => handleSelectPage("id7")}
          >
            {links.id7}
          </Link>
        </div>
      </div>
    </>
  );
  
}

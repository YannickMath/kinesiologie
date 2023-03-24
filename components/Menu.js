import Link from "next/link";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import styles from "../styles/Menu.module.css";
import { useState, useEffect } from "react";

export default function Menu() {
  const links = {
    id1: "Acceuil",
    id2: "Kinésiologie",
    id3: "Pourquoi ?",
    id4: "Reflexologie cranio-sacrée",
    id5: "Nettoyage energétique",
    id6: "A propos de moi",
    id7: "Contact et tarifs",
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [nomPage, setNomPage] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
console.log("NOMPAGE", nomPage)

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};

const handleSelectPage = (id) => {
  localStorage.setItem("nomPage", links[id]);
  toggleMenu();
};

useEffect(() => {
  //on stocke dans le localStorage la valeur de nomPage
  const savedNomPage = localStorage.getItem("nomPage");
  if (savedNomPage) {
    setNomPage(savedNomPage);
  }

  // Vérifie si l'écran est petit
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  if (mediaQuery.matches) {
    setIsSmallScreen(true);
  }
}, []);





  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Muriel MATHIEU Kinésiologie</title>
        <link rel="icon" href="./logo.png" type="image/x-icon" />
      </Head>
      <style jsx>{`
      .menu-transition {
        transition: all 0.5s ease-out;
      }
    `}</style>
    <div className="bg-green-50 md:pt-24 text-gray-500 flex justify-around items-center font-semibold font-tangerine fixed top-0 w-full z-50">
      <img
        className={`rounded-md md:rounded-[50px] w-40 h-40 md:w-64 md:h-64 md:my-0 my-auto ${menuOpen ? 'absolute top-0 left-0 ml-3 z-10' : ''}`}
        src="logo.png"
        alt="logo"
      />

      {isSmallScreen && (
        <div className={`text-center font-medium mr-4 ${menuOpen ? 'w-full' : ''}`}>
          <p className={`text-gray-400 text-4xl mb-4 mt-14 flex ml-5 ${menuOpen ? 'w-2/5' : ''}`}>Menu</p>
          <p className={`text-gray-400 text-2xl text-bold flex ml-5 ${menuOpen ? 'w-2/5' : ''}`}>{nomPage}</p>
        </div>
      )}

      <button
        className="text-3xl md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        &#9776;
      </button>

      <div
        className={`flex flex-col md:flex-row mr-2 ml-16 overflow-hidden ${menuOpen ? 'block menu-transition' : 'hidden menu-transition'} md:block ${menuOpen ? 'w-3/5' : ''}`}
      >
          <Link href="/Acceuil">
            <p
              className={styles.link}
              onClick={() => handleSelectPage("id1")}
            >
              {links.id1}
            </p>
          </Link>
          <Link
            href="/Kinesiologie">
            <p
              className={styles.link}
              onClick={() => handleSelectPage("id2")}
            >
              {links.id2}
            </p>
          </Link>
          <Link
            href="/Pourquoi">
            <p
              className={styles.link}
              onClick={() => handleSelectPage("id3")}
            >
              {links.id3}
            </p>
          </Link>
          <Link
            href="/Reflexologie">
            <p
              className={styles.link}
              onClick={() => handleSelectPage("id4")}
            >
              {links.id4}
            </p>
          </Link>
          <Link
            href="/NettoyageEnergetique">
            <p
              className={styles.link}
              onClick={() => handleSelectPage("id5")}
            >
              {links.id5}
            </p>
          </Link>
          <Link
            href="/AproposDeMoi">
            <p
              className={styles.link}
              onClick={() => handleSelectPage("id6")}
            >
              {links.id6}
            </p>
          </Link>
          <Link
            href="/ContactsEtTarifs">
            <p
              className={styles.link}
              onClick={() => handleSelectPage("id7")}
            >
              {links.id7}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

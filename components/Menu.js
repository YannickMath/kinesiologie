import Head from "next/head";
import "tailwindcss/tailwind.css";
import styles from "../styles/Menu.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Menu({ isSmallScreen }) {
  const links = {
    id1: "Acceuil",
    id2: "Kinésiologie",
    id3: "Pourquoi?",
    id4: "Reflexologie cranio-sacrée",
    id5: "Nettoyage energétique",
    id6: "A propos de moi",
    id7: "Contact et tarifs",
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [nomPage, setNomPage] = useState("Acceuil");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSelectPage = (id) => {
    const newPageName = links[id];
    localStorage.setItem("nomPage", newPageName);
    setNomPage(newPageName);
    toggleMenu();
  };

  useEffect(() => {
    const savedNomPage = localStorage.getItem("nomPage");
    if (savedNomPage) {
      setNomPage(savedNomPage);
    }
  }, []);

  const getImageSrc = () => {
    if (isSmallScreen && nomPage === "A propos de moi") {
      return "/moi.WebP";
    }
    return "logo.png";
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Muriel MATHIEU Kinésiologie</title>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <div className="bg-green-50 lg:h-28 md:h-28 sm:h-20 p-2 text-gray-500 flex justify-around md:justify-around items-center font-semibold font-carattere fixed top-0 w-full z-50 ">
        <div
          className={`relative md:fixed md:top-0 md:left-0 md:ml-5 ${
            menuOpen ? "hidden md:block" : ""
          }`}
        >
          <img
            className="md:rounded-xl w-40 h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 logo "
            src={getImageSrc()}
            alt="logo"
            style={{
              marginTop: isSmallScreen ? 0 : "-35px",
              // padding: "6px",
              borderRadius: "30px",
            }}
          />
        </div>

        {isSmallScreen && (
          <div className="text-center font-medium ">
            <p className="text-gray-600 text-3xl mb-2 p-2 ml-2">{nomPage}</p>
          </div>
        )}
        <button
          className="text-3xl md:hidden focus:outline-none mr-2 ml-2 relative"
          onClick={toggleMenu}
        >
          &#9776;
        </button>

        <div
          className={`${
            isSmallScreen ? (menuOpen ? "block" : "hidden") : "flex"
          }  md:flex-row md:justify-around md:w-auto md:ml-64 mr-2 p-2 items-center font-medium text-gray-600`}
        >
          <Link href="/Acceuil">
            <p className={styles.link} onClick={() => handleSelectPage("id1")}>
              {links.id1}
            </p>
          </Link>
          <Link href="/Kinesiologie">
            <p className={styles.link} onClick={() => handleSelectPage("id2")}>
              {links.id2}
            </p>
          </Link>
          <Link href="/Pourquoi">
            <p className={styles.link} onClick={() => handleSelectPage("id3")}>
              {links.id3}
            </p>
          </Link>
          <Link href="/Reflexologie">
            <p className={styles.link} onClick={() => handleSelectPage("id4")}>
              {links.id4}
            </p>
          </Link>
          <Link href="/NettoyageEnergetique">
            <p className={styles.link} onClick={() => handleSelectPage("id5")}>
              {links.id5}
            </p>
          </Link>
          <Link href="/AproposDeMoi">
            <p className={styles.link} onClick={() => handleSelectPage("id6")}>
              {links.id6}
            </p>
          </Link>
          <Link href="/ContactsEtTarifs">
            <p className={styles.link} onClick={() => handleSelectPage("id7")}>
              {links.id7}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

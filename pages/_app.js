import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import React from "react";
import { useRouter} from "next/router";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { useState, useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // const updateScreenSize = () => {
  //   const mediaQuery = window.matchMedia("(max-width: 768px)");
  //   setIsSmallScreen(mediaQuery.matches);
  // };


  const updateScreenSize = () => {
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    const isTablet = window.matchMedia("(min-width: 768px)").matches;
  
    // Verrouiller le mode portrait sur les smartphones
    if (isSmallScreen && !isPortrait) {
      document.documentElement.style.transform = "rotate(0deg)";
      document.documentElement.style.width = "100vw";
      document.documentElement.style.height = "100vh";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.transform = "none";
      document.documentElement.style.width = "auto";
      document.documentElement.style.height = "auto";
      document.documentElement.style.overflow = "visible";
    }
  
    // Verrouiller le mode paysage sur les tablettes
    // if (!isSmallScreen && isTablet && isPortrait) {
    //   document.documentElement.style.transform = "rotate(90deg)";
    //   document.documentElement.style.width = "100vh";
    //   document.documentElement.style.height = "100vw";
    //   document.documentElement.style.overflow = "hidden";
    // } else {
    //   document.documentElement.style.transform = "none";
    //   document.documentElement.style.width = "auto";
    //   document.documentElement.style.height = "auto";
    //   document.documentElement.style.overflow = "visible";
    // }
  };
  
  useEffect(() => {
    updateScreenSize(); // Call the function once to set the initial value
    window.addEventListener("resize", updateScreenSize); // Listen for window resize events

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <Layout isSmallScreen={isSmallScreen} >
      <Component {...pageProps} key={router.route} isSmallScreen={isSmallScreen}  />
    </Layout>
  );
}

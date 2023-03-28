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

  const updateScreenSize = () => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(mediaQuery.matches);
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

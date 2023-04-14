import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import React from "react";
import { useRouter} from "next/router";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import Script from "next/script"; 
// import { LogBox } from "react-native";


// LogBox.ignoreAllLogs();



export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const updateScreenSize = () => {
    const mediaQuery = window.matchMedia("(max-width: 768px) and (orientation: portrait)");
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
  
  //Google analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", NEXT_PUBLIC_GA_ID, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [
router.events
]);

const NEXT_PUBLIC_GA_ID = "G-Z137MMNTGH"

  const GtagScript = () => (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
    </>
  ); 
  
  return (
    <Layout isSmallScreen={isSmallScreen} >
      <Component {...pageProps} key={router.route} isSmallScreen={isSmallScreen}  />
      <GtagScript /> 
    </Layout>
  );
}


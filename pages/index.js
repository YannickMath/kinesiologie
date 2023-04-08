
import Accueil from "../components/Accueil"

import Script from "next/script"; 


export default function Home() {
  return (
    <div style={{ height: "100vh" }}>
       <Script
        src="
https://www.googletagmanager.com/gtag/js?id=NEXT_PUBLIC_GA_ID
"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'NEXT_PUBLIC_GA_ID');
        `}
      </Script> 
      <Accueil />
    </div>
  );
}

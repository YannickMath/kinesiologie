import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/Contact.css";


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const infoPersonnel = {
    nom: "Muriel MATHIEU",
    adresse: "45 Boulevard Général de Gaulle, Oullins 69600",
    activité: "Kinésiologie, Réflexologie cranio-sacrée, Nettoyage energétique",
    email: "contact@murielmathieu.fr",
    disponibilité: "Du lundi au vendredi",
     };

  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
}

export default MyApp;

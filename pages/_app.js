import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
}

export default MyApp;

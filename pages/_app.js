import { LanguageProvider } from "../context/LanguageContext";

import Layout from "../components/Layout";

import "../styles/globals.css";
// import { Inter } from "@next/font/google";
// const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout />
      {/* <main className={inter.className}> */}
      <Component {...pageProps} />
      {/* </main> */}
      {/* </Layout> */}
    </LanguageProvider>
  );
}

export default MyApp;

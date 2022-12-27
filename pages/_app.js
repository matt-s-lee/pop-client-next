import { LanguageProvider } from "../context/LanguageContext";
import { CategoriesProvider } from "../context/CategoriesContext";

import Layout from "../components/Layout";

import "../styles/globals.css";
import { FilterProvider } from "../context/FilterContext";

function App({ Component, pageProps }) {
  return (
    <FilterProvider>
      <CategoriesProvider>
        <LanguageProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LanguageProvider>
      </CategoriesProvider>
    </FilterProvider>
  );
}

export default App;

// import { Inter } from "@next/font/google";
// const inter = Inter({ subsets: ["latin"] });

// Attempt to generate MUI classnames in correct way
// import { StylesProvider, createGenerateClassName } from "@mui/styles";
// const generateClassName = createGenerateClassName({
//   productionPrefix: "c",
// });

    // <StylesProvider generateClassName={generateClassName}>
      {/* <main className={inter.className}> */}
      {/* </main> */}
    // </StylesProvider>



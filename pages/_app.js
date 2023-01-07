import { LanguageProvider } from "../context/LanguageContext";
import { CategoriesProvider } from "../context/CategoriesContext";
import { FilterProvider } from "../context/FilterContext";

import Layout from "../components/Layout";

import "../styles/globals.css";
import { libre } from "../styles/font";

function App({ Component, pageProps }) {
  return (
    <main className={libre.className}>
      <FilterProvider>
        <CategoriesProvider>
          <LanguageProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LanguageProvider>
        </CategoriesProvider>
      </FilterProvider>
    </main>
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
{
  /* <main className={inter.className}> */
}
{
  /* </main> */
}
// </StylesProvider>

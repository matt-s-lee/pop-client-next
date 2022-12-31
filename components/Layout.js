import { useContext, useEffect } from "react";
import { CategoriesContext } from "../context/CategoriesContext";

import Footer from "./Footer";
import Navbar from "./Navbar/index";
import Navigator from "./Navigator";

export default function Layout({ children }) {
  const {
    setCategories,
    setTopics,
    setSupportTypes,
    setSupportTypesNav,
    setProvinces,
  } = useContext(CategoriesContext);

  useEffect(() => {
    fetch("/api/navbar")
      .then((response) => response.json())
      .then((json) => {
        setProvinces(json.provincesJson);
        setSupportTypes(json.supportTypesJson);
        setSupportTypesNav(json.supportTypesNavJson);
        setTopics(json.categoriesNavJson);
        setCategories(json.categoriesJson);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Navigator />
      <Footer />
    </>
  );
}

// export default function Layout({ categories, topics }) {
//   return (
//     <>
//       <Navbar categories={categories} topics={topics} />
//     </>
//   );
// }

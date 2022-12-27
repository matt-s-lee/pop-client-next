// For use in navbar

import { createContext, useState } from "react";

export const CategoriesContext = createContext(null);

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState();
  const [topics, setTopics] = useState();
  const [supportTypes, setSupportTypes] = useState();
  const [supportNavBar, setSupportNavBar] = useState();

  return (
    <CategoriesContext.Provider
      value={{
        topics,
        setTopics,
        supportTypes,
        setSupportTypes,
        categories,
        setCategories,
        supportNavBar,
        setSupportNavBar,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

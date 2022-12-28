// For use in navbar

import { createContext, useState } from "react";

export const CategoriesContext = createContext(null);

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState(); // all categories (for resources on homepage)
  const [topics, setTopics] = useState(); // topics (for navBar)
  const [supportTypes, setSupportTypes] = useState(); // all support types (to filter
  const [supportNavBar, setSupportNavBar] = useState(); // support types (for NavBar)
  const [sortedTopics, setSortedTopics] = useState();
  const [sortedTypes, setSortedTypes] = useState();

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
        sortedTopics,
        setSortedTopics,
        sortedTypes,
        setSortedTypes,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

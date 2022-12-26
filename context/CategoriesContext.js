import { createContext, useState } from "react";

export const CategoriesContext = createContext(null);

export const CategoriesProvider = ({ children }) => {
  // const [categories, setCategories] = useState();
  // const [matchedCategories, setMatchedCategories] = useState();
  // const [filteredResources, setFilteredResources] = useState();

  return (
    <CategoriesContext.Provider
      value={
        {
          // categories,
          // setCategories,
          // matchedCategories,
          // setMatchedCategories,
          // filteredResources,
          // setFilteredResources,
        }
      }
    >
      {children}
    </CategoriesContext.Provider>
  );
};

import { createContext, useState } from "react";

export const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const [queryTerm, setQueryTerm] = useState([]);
  const [filteredResources, setFilteredResources] = useState();
  console.log("fiteredResources", filteredResources);

  return (
    <FilterContext.Provider
      value={{
        queryTerm,
        setQueryTerm,
        filteredResources,
        setFilteredResources,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

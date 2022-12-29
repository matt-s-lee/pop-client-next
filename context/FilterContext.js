import { createContext, useState } from "react";

export const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const [allTags, setAllTags] = useState([]);
  const [queryTerm, setQueryTerm] = useState([]);
  const [filteredResources, setFilteredResources] = useState();
  console.log(allTags);

  return (
    <FilterContext.Provider
      value={{
        allTags,
        setAllTags,
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

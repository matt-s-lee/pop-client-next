import { createContext, useState } from "react";

export const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const [queryTerm, setQueryTerm] = useState([]);
  console.log(queryTerm);

  return (
    <FilterContext.Provider
      value={{
        queryTerm,
        setQueryTerm,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

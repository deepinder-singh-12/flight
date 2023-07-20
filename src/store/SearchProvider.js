import React, { useState } from "react";
import SearchContext from "./searchContext";

const SearchProvider = ({ children }) => {
  const [searchString, setSearchString] = useState("");
  return (
    <SearchContext.Provider value={{ searchString, setSearchString }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;

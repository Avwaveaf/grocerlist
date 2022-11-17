import { createContext, useState } from "react";

export const SearchProductContext = createContext({
  productResult: {},
  setProductResult: () => {},
  statusVerbose: "",
  setStatusVerbose: () => {},
  onSearchUsed: false,
  setOnSearchUsed: () => {},
});

export const SearchProductContextProvider = ({ children }) => {
  const [productResult, setProductResult] = useState({});
  const [statusVerbose, setStatusVerbose] = useState("");
  const [onSearchUsed, setOnSearchUsed] = useState(false);
  const value = {
    productResult,
    setProductResult,
    statusVerbose,
    setStatusVerbose,
    onSearchUsed,
    setOnSearchUsed,
  };
  return (
    <SearchProductContext.Provider value={value}>
      {children}
    </SearchProductContext.Provider>
  );
};

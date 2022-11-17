import { createContext, useState } from "react";

export const SnacksContext = createContext({
  snack: [],
  setSnack: () => {},
  beverages: [],
  setBeverages: () => {},
  currPage: 1,
  setCurrPage: () => {},
  pageCount: 0,
  setPageCount: () => {},
});

export const SnacksContextProvider = ({ children }) => {
  const [snack, setSnack] = useState([]);
  const [beverages, setBeverages] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currPage, setCurrPage] = useState(1);
  const value = {
    snack,
    setSnack,
    beverages,
    setBeverages,
    pageCount,
    setPageCount,
    currPage,
    setCurrPage,
  };
  return (
    <SnacksContext.Provider value={value}>{children}</SnacksContext.Provider>
  );
};

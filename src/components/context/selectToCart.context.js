import { createContext, useState } from "react";

const cardVarietyData = [];
export const SelectToCartContext = createContext({
  selectTriggered: false,
  setSelectTriggered: () => {},
  toggleOpenCart: false,
  setToggleOpenCart: () => {},
  setCardSelectedVariety: () => {},
  cardVariety: [],
  setCardVariety: () => {},
  cardVarietyCount: 0,
  setCardVarietyCount: () => {},
});

export const SelectToCartContextProvider = ({ children }) => {
  const [selectTriggered, setSelectTriggered] = useState(false);
  const [toggleOpenCart, setToggleOpenCart] = useState(false);
  const [cardVariety, setCardVariety] = useState(cardVarietyData);
  const [cardVarietyCount, setCardVarietyCount] = useState(0);

  const setCardSelectedVariety = (data) => {
    if (!cardVarietyData.includes(data)) {
      cardVarietyData.push(data);
      setCardVariety(cardVarietyData);
      setCardVarietyCount(cardVarietyData.length);
    }
  };
  const deleteCardDataFromSelectVariety = (data) => {
    if (cardVarietyData.includes(data)) {
      const deleteIndex = cardVarietyData.indexOf(data);
      cardVarietyData.splice(deleteIndex);
      setCardVariety(cardVarietyData);
      setCardVarietyCount(cardVarietyData.length);
    }
  };
  const value = {
    selectTriggered,
    setSelectTriggered,
    toggleOpenCart,
    setCardSelectedVariety,
    cardVariety,
    cardVarietyCount,
    setCardVarietyCount,
    setToggleOpenCart,
    deleteCardDataFromSelectVariety,
  };
  return (
    <SelectToCartContext.Provider value={value}>
      {children}
    </SelectToCartContext.Provider>
  );
};

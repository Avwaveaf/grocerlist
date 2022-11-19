import { createContext, useEffect, useState } from "react";

// const cardVarietyData = [];

// const addToCartCard = (existingDatas, data) => {
//   const existingDatasArray = existingDatas.find(
//     (existingData) => existingData._id === data._id
//   );

//   if (existingDatasArray) {
//     return [...existingDatas, { data }];
//   }
//   return
// };

// const deleteItemInCart = (existingDatas, data) => {
//   const deleteIndex = existingDatas.indexOf(data);
//   const splicedDatas = existingDatas.splice(deleteIndex);
//   return splicedDatas;
// };
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
  const [cardVariety, setCardVariety] = useState([]);
  const [cardVarietyCount, setCardVarietyCount] = useState(0);

  useEffect(() => {
    setCardVarietyCount(cardVariety.length);
  }, [cardVariety]);

  const setCardSelectedVariety = (data) => {
    if (!cardVariety.includes(data)) {
      setCardVariety([...cardVariety, data]);
      // cardVarietyData.push(data);
      // setCardVariety(cardVarietyData);
    }
    return;
  };
  const deleteCardDataFromSelectVariety = (data) => {
    if (cardVariety.includes(data)) {
      const updatedCardVariety = cardVariety.filter(
        (item) => item._id !== data._id
      );
      // const splicedDatas = cardVariety.splice(deleteIndex, 1);
      // // console.log(splicedDatas);

      setCardVariety(updatedCardVariety);

      // setCardVariety(deleteItemInCart(cardVariety, data));
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

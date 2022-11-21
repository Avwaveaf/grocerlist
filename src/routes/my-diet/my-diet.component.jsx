import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../components/context/user.context";
import "./my-diet.style.css";
import { getDietListAndDocument } from "../../utils/firebase/firebase.utils";

import { CartProduct } from "../../components/cart-product/cart-product.component";
import { BrandsDetail } from "../../components/brands-detail/brands-detail.component";

export const MyDiet = () => {
  const [dietList, setDietList] = useState([]);
  const { currentUser } = useContext(UserContext);
  const [filteredDietList, setFilteredDietList] = useState([]);
  const [productDetail, setProductDetail] = useState({});
  const [showDesc, setShowDesc] = useState(false);
  useEffect(() => {
    const ids = dietList.map((e) => e._id);
    const filtered = dietList.filter(
      ({ _id }, index) => !ids.includes(_id, index + 1)
    );
    setFilteredDietList(filtered);
  }, [dietList]);

  useEffect(() => {
    // const arrDietItem = async () => {
    //   const getItemList = await getDietListAndDocument(
    //     currentUser.displayName.toLowerCase()
    //   );
    //   const { cardVariety } = getItemList;
    //   setDietList(cardVariety);
    // };
    // arrDietItem();
    const arrDietItem = async () => {
      const getItemList = await getDietListAndDocument(currentUser);
      setDietList(getItemList.cardVariety);
    };
    arrDietItem();
  }, [currentUser]);
  const myDietProductClickHandler = (product) => {
    setProductDetail(product);
    setShowDesc(true);
  };

  return (
    <div className="my-diet-page-container">
      <div className="my-diet-list">
        {filteredDietList.map((e) => {
          return (
            <div
              onClick={() => myDietProductClickHandler(e)}
              className="my-diet-list-card-container"
              key={e.id}
            >
              <CartProduct product={e} />
            </div>
          );
        })}
      </div>
      {showDesc ? (
        <div className="my-diet-detail">
          <BrandsDetail product={productDetail} />
        </div>
      ) : (
        <span
          style={{
            margin: "auto",
            textAlign: "center",
            color: "gray",
          }}
        >
          click product to see the details
        </span>
      )}
    </div>
  );
};

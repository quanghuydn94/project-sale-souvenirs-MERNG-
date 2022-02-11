import React, { useEffect } from "react";
import { Product } from "../components/Products/Product";
import { useDispatch } from "react-redux";
import { getProductData } from "../redux/Shopping/shopping-actions";

export const Stores = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductData());
  }, []);
  return (
    <div>
      <Product />
    </div>
  );
};

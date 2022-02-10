import React, { useEffect } from "react";
import { Product } from "../components/Products/Product";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { getProducts } from "../graphql-client/queries";
import { getProductData } from "../redux/Shopping/shopping-actions";
export const Stores = () => {
  const { loading, error, data } = useQuery(getProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(getProductData(data));
    }
  }, [data]);
  return (
    <div>
      <Product />
    </div>
  );
};

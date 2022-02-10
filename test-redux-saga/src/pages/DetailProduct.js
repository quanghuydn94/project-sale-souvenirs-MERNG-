import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Details } from "../components/Products/Details";

export const DetailProduct = () => {
  // const params = useParams();
  // const products = useSelector((state) => state.shop.products);
  // const product = products.find(
  //   (product) => product.id.toString() === params.id
  // );
  const product = useSelector((state) => state.shop.currentItem);
  return (
    <div>
      <Details product={product} />
    </div>
  );
};

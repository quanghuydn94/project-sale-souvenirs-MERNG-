import React, { useEffect } from "react";
import { TableProducts } from "../components/ManagedProducts/Table";
import { useDispatch } from "react-redux";
import { getProductData } from "../redux/Shopping/shopping-actions";
import { useQuery } from "@apollo/client";
import { getProducts } from "../graphql-client/queries";

export const ManagedProducts = () => {
  const { loading, error, data } = useQuery(getProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(getProductData(data));
    }
  }, [data]);
  return <TableProducts />;
};

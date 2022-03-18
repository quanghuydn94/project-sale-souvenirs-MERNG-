import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Details } from "../components/Products/Details";
import { loadCurrentItem } from "../redux/Shopping/shopping-actions";

export const DetailProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCurrentItem(params.id));
  }, []);

  return (
    <div>
      <Details />
    </div>
  );
};

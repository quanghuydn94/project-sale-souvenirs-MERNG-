import { useMutation } from "@apollo/client";
import React, { useState, useRef } from "react";
import { CreateProduct } from "../components/ManagedProducts/CreateProduct";
import { addSingleProduct } from "../graphql-client/mutation";
import { getProducts } from "../graphql-client/queries";

export const AddProduct = () => {
  const snackbarRef = useRef(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    title: "",
    price: "",
    image: "",
  });

  const { name, description, title, price, image } = newProduct;

  const onChangeInput = (event) => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
  };
  const onAddProduct = (event) => {
    event.preventDefault();
    addProduct({
      variables: { name, description, title, price: parseInt(price), image },
      refetchQueries: [{ query: getProducts }],
    });
    setNewProduct({
      name: "",
      description: "",
      title: "",
      price: "",
      image: "",
    });
    snackbarRef.current.show();
  };

  const [addProduct, dataMutation] = useMutation(addSingleProduct);
  return (
    <div>
      <CreateProduct
        onChangeInput={onChangeInput}
        onAddProduct={onAddProduct}
        newProduct={newProduct}
        snackRef={snackbarRef}
      />
    </div>
  );
};

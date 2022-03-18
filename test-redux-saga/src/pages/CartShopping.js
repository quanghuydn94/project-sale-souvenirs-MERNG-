import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Cart } from "../components/Cart/Cart";
import { adjustQty, removeFromCart } from "../redux/Shopping/shopping-actions";

export const CartShopping = () => {
  const cart = useSelector((state) => state.shop.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cart.length) {
      localStorage.setItem("carts", JSON.stringify(cart));
    }
  }, []);
  const handleDeleteCartItem = (id) => {
    dispatch(removeFromCart(id));
  };
  const onChangeQty = (id, value) => {
    dispatch(adjustQty(id, value));
  };
  return (
    <div>
      <Cart deleteCartItem={handleDeleteCartItem} onChangeQty={onChangeQty} />
    </div>
  );
};

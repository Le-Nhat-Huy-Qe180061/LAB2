import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const cart = useSelector((state) => state.cartReducer);

  console.log(cart);

  return (
    <>
      <div className="cart_total">
        Tổng tiền: <span>10000đ</span>
      </div>
      <div className="cart">
        {cart.map((item, _) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default CartList;

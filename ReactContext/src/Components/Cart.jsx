import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const cart = useContext(CartContext);
  const total = cart.cartItems.reduce((a, b) => a + b.price, 0);
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart &&
        cart.cartItems.map((element) => {
          return (
            <li>
              {element.name} - {element.price}
            </li>
          );
        })}

      <h5>Total bill : {total}</h5>
    </div>
  );
};

export default Cart;

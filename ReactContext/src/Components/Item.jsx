import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Item = (props) => {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <div className="item-card">
      <h4>Item {props.name}</h4>
      <p>Price: ${props.price}</p>
      <button
        onClick={() =>
          cart.setCartItems([
            ...cart.cartItems,
            { name: props.name, price: props.price },
          ])
        }>
        Add to cart
      </button>
    </div>
  );
};

export default Item;

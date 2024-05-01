import { useContext } from "react";
import { CartContext } from "../store/ShoppingCartContext";
export default function Cart() {
  const cartValue = useContext(CartContext); // this establishes the conection
  const totalPrice = cartValue.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {cartValue.items.length === 0 && <p>No cartValue.items in cart!</p>}
      {cartValue.items.length > 0 && (
        <ul id="cart-cartValue.items">
          {cartValue.items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button
                    onClick={() =>
                      cartValue.onUpdateCartItemQuantity(item.id, -1)
                    }>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      cartValue.onUpdateCartItemQuantity(item.id, 1)
                    }>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}

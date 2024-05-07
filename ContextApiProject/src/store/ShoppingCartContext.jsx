import { createContext, useState, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

// initial value that will be providede to all the other components

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  onUpdateCartItemQuantity: () => {},
});

// This function is all about managing context data and providing the data to the application
// This will be data related to the shopping cart
function shoppingCartReducer(state, action) {
  // action parameter gets the object we are passing to dispatch
  switch (action.type) {
    case "ADD_ITEM": {
      const updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find(
          (product) => product.id === action.payload
        );
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        ...state, // to not lose any data , needs to added in ocmpmlex applications
        items: updatedItems,
      };
    }
    case "UPDATE_ITEM_QUANTITY": {
      const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
      };
    }
  }
  return state;
}
export function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );
  // a second value allows us to set initial value for the state which will be used if the state has never been updated

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM_QUANTITY",
      payload: { productId, amount },
    });
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    onUpdateCartItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

// The CartContext.Provider should be wrapped around any value that the CartContextProvider custom component is wrapped around

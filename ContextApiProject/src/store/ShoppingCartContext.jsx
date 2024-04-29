import { createContext } from "react";

// initial value that will be providede to all the other components

const CartContext = createContext({
  items: [],
});

// provide this context to application and our componensts
// wrap this context around parts of the tree that need it so that they can accept the values we  are providing here

export default CartContext;

// The object that we pass has the values that we can access,
// The object that createContext passees has functions that can be accessed on the consumer side.

import React from "react";
import Item from "./Components/Item";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <div>
      <Item name="Macbook Pro" price={1500}></Item>
      <Item name="Pendrive" price={400}></Item>
      <Item name="Phone" price={440}></Item>
      <Cart></Cart>
    </div>
  );
};

export default App;

import React from "react";
import Item from "./Components/Item";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
const App = () => {
  return (
    <div>
      {/* <Item name="Macbook Pro" price={1500}></Item>
      <Item name="Pendrive" price={400}></Item>
      <Item name="Phone" price={440}></Item>
      <Cart></Cart> */}
      <Login></Login>
      <Profile></Profile>
    </div>
  );
};

export default App;

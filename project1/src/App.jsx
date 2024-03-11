import { useState } from "react";

import Chai from "./chai";
function App() {
  const userName = "Aman";
  return (
    <>
      <Chai />
      <h1>But does {userName} </h1>
      <h1>You call</h1>
    </>
  );
}

export default App;

// This is curly brace syntax
// {} holds an evaluated expression and not the actual javascript statements. The calculations can either be done inside or outside the function

import { useState } from "react";

import Chai from "./chai";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Chai />
      <h1>But does he know</h1>
      <h1>You call</h1>
    </>
  );
}

export default App;

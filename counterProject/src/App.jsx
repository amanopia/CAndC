import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  function addHandler() {
    // setCounter((prev) => {
    //   if (prev == 20) {
    //     return prev;
    //   } else {
    //     return prev + 1;
    //   }
    // });
    // console.log(counter);
    if (counter == 20) {
      setCounter(20);
    } else {
      setCounter(counter + 1);
    }
  }

  function reduceHandler() {
    setCounter((prev) => {
      if (prev == 0) {
        return prev;
      } else {
        return prev - 1;
      }
    });
    // console.log(counter);
  }
  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>Couner value: {counter}</h2>

      <button onClick={addHandler}>Add value {counter}</button>
      <button onClick={reduceHandler}>Decrease value {counter}</button>
    </>
  );
}

export default App;

// React takes the control from us annd decides how the ui updates
// We update the variable in one place and it reacts everywhere
// Whenever we update a single value, it reacts the value at all places

// whenever we click on a handler function and update the value, react reacts to it -> analyzes the whole dom and makes changes in it where the value has changed

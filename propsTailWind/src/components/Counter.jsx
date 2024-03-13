import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function addValue() {
    setCounter((prevValue) => prevValue + 1); // the callback function fetches the latest value of the counter
    // with react fiber, the updates are batched by useState
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
  }
  function reduceValue() {
    setCounter((prevValue) => prevValue - 1);
    setCounter((prevValue) => prevValue - 1);
    setCounter((prevValue) => prevValue - 1);
    setCounter((prevValue) => prevValue - 1);
    if (counter == 0) {
      setCounter(0);
      //batch
    }
  }
  return (
    <div>
      <p className="bg-pink-500 p-4 mb-4 rounded-md">
        Counter value: {counter}
      </p>
      <button className="bg-green-500 p-4 mr-4 rounded-md" onClick={addValue}>
        Increment
      </button>
      <button className="bg-red-500 p-4 mr-4 rounded-md" onClick={reduceValue}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;

// Through fiber diffing algorithm, useState batches the updates and sends them for processing further
// whe we do
/* 
if (counter == 0) {
  setCounter(0);
}
setCounter((prevValue) => prevValue - 1);
setCounter((prevValue) => prevValue - 1);
setCounter((prevValue) => prevValue - 1);
setCounter((prevValue) => prevValue - 1);

*/
// The updates are batched together and when these start executing, each of them get the latest value of the counter, but the actual value is only updated after they are done executing

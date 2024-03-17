import { useState, useRef, useCallback, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [password, setPassword] = useState("cq343c33r");
  const [length, setLength] = useState(8);
  const [numAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabchefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-+=[]{}`";

    const string = str.split("");
    for (let i = 0; i < length; i++) {
      const randomElement = string[Math.floor(Math.random() * string.length)];
      pass += randomElement;
    }
    console.log(pass);
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-d shadow-md px-4 py-8 text-orange-500 bg-gray-700 ">
        <p className="mb-4"> Password Generator</p>

        <div>
          <input
            type="text"
            value={password}
            className="outline w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button className="m-4">Copy</button>
        </div>
        <div>
          <input
            type="range"
            min="4"
            max="50"
            onChange={(ev) => setLength(event.target.value)}
          />
          <label>Length: {length}</label>
        </div>

        <div>
          <label className="mr-4" htmlFor="numberInput">
            Number
          </label>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
        </div>

        <div>
          <label className="mr-4" htmlFor="charInput">
            Characters
          </label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
        </div>
      </div>
      {/* <p className="text-4xl text-center ">Password generator</p>
      <input type="text" value={password} readOnly />
      <input
        type="range"
        min="8"
        max="24"
        onChange={(event) => setLength(event.target.value)}
      />
      <input type="checkbox" value={numAllowed} />
      <input type="checkbox" value={charAllowed} /> */}
    </>
  );
}

// useCallback we implement caching and memoization

export default App;

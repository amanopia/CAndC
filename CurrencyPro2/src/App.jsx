import "./App.css";
import { InputBox } from "./components";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

import currencyFlagData from "./components/currencyFlagData";

function App() {
  const [currencyData, setCurrencyData] = useState({});

  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  // For now, using the currency to render the list
  // currency object will contain all the live currency rates
  const currencyObj = useCurrencyInfo(from);

  //! Limiting the number of currencies since currencyObj contains a lot of crypto currencies as well
  const currencyCodesArray = [];
  currencyFlagData.forEach((element) => {
    const newObj = { code: element.code.toLowerCase(), flag: element.flag };
    currencyCodesArray.push(newObj);
  });

  const currencies = currencyCodesArray;

  function convertCurrencyHandler() {
    let result = amount * currencyObj[to];
    setConvertedAmount(result);
  }
  function swappingHandler() {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount); // 1 usd = setConvertedAmount(83.30)
    setAmount(convertedAmount);
  }

  function currencyChangeHandler(currency) {
    setFrom(currency);
  }

  //! This function sets amount value on increment and decrement, that is required for conversion to another amount
  function amountChangeHandler(amount) {
    setAmount(amount);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="">
      <nav className="navigation">
        <ul>
          <li>About</li>
          <li>Contact Me</li>
          <li>LinkedIn</li>
        </ul>
      </nav>
      <InputBox
        label={"from"}
        amount={amount}
        currencies={currencies}
        onCurrencyChange={currencyChangeHandler}
        currencyType={from}
        onAmountChange={amountChangeHandler}
        amountDisabled={false}
        currencyDisabled={false}></InputBox>

      <InputBox
        label={"to"}
        currencies={currencies}
        currencyType={to}
        onCurrencyChange={(currency) => setTo(currency)}
        amountDisabled={true}
        currencyDisabled={false}
        amount={convertedAmount}></InputBox>
      <button onClick={convertCurrencyHandler} className="btn-convert">
        Convert from {from} to {to}
      </button>
      <button className="btn-convert" onClick={swappingHandler}>
        Swap
      </button>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAG5SURBVHja7JdLihRBEEBfVqUU6rQNggiCFxA8gswFRNy49gAeQdx4G8HbuHDvRkRUnKxPZ2dGhous6Y9TtavPZmITtYggXsWPSKOqrCkFK8stgAFKoOr1kiKAt8CD76/f/KYYj//u7bPpU28Mn199eGiBLabg7uWLUePLp08mB/j66xvA1gKVSkK9J/29guuxNCZrVX60905qZlD0xvd5XbPvmN22uo+XCFDZXI2Idjt0txuk9TFM+ve7Yk9MAkAPIKSuI3XdoEMX/aQAd4qSfYpHAI0RbVt0FGA/KYAtyvMMaBTUObRpBh2a0E3cgspewkkJQkDqGm3bQfNPL9/PtIQ+cmjC5OqbTaj9qppRcglCAFej3h9H8P9xnBUgCtRNBllYDj0QmxbWAkgxggiktFjg60PosAeMJnQtAIkRq7poBlIfK5cgRBQdzYC1dtLgVVVRluUJgEQo7XH0RminlBDCKUDK99AIwByXs4gcb0JJafaFc7aCjTlktQBIqpiVAPIYas5AcXEx6LCRzaxjKAn4465GjZ1zs13GBngMPAceLbyFfwJfTP8m2PR6SfGAM7eP07UB/g0Aw73uXdMbeJMAAAAASUVORK5CYII="></img>
    </form>
  );
}

export default App;
//  https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json

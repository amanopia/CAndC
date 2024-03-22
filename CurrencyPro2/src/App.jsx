import "./App.css";
import { InputBox } from "./components";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [currencyData, setCurrencyData] = useState({});

  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  // For now, using the currency to render the list
  const currencyObj = useCurrencyInfo(from);

  const currencies = Object.keys(currencyObj);

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
    </form>
  );
}

export default App;
//  https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json

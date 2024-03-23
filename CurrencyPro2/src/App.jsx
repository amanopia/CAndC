import "./App.css";
import { InputBox, Navigation } from "./components";
import { useState, useEffect } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import currencyFlagData from "./components/currencyFlagData";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  // currency object will contain all the live currency rates
  const currencyObj = useCurrencyInfo(from);

  // On the change of currency, new data will come into the currency object
  // When the currency object gets updated, the amount will change simultaneously
  useEffect(() => {
    amountChangeHandler(amount);
  }, [currencyObj]);

  // Limiting the number of currencies since 'currencyObj' contains crypto currencies as well
  const currencyCodesArray = [];
  currencyFlagData.forEach((element) => {
    const newObj = {
      value: element.code.toLowerCase(),
      label: element.code.toLowerCase(),
      flag: element.flag,
    };
    currencyCodesArray.push(newObj);
  });

  // Triggers the calling of new data since currency is present as a dependency in the useCurrencyInfo hook
  function currencyChangeHandler(currency) {
    setFrom(currency);
  }
  // creating a currencies array that will contain all the currency information
  const currencies = currencyCodesArray;

  // This function is connected to the button
  function convertCurrencyHandler() {
    let result = amount * currencyObj[to];
    setConvertedAmount(result.toFixed(2));
  }

  // This function manages the swapping of values
  function swappingHandler() {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount); // 1 usd = setConvertedAmount(83.30)
    setAmount(convertedAmount);
  }

  // This function sets amount value on increment and decrement, that is required for conversion to another amount
  function amountChangeHandler(amount) {
    setAmount(amount);
    let result = amount * currencyObj[to];
    setConvertedAmount(result.toFixed(2));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="">
      <Navigation></Navigation>
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

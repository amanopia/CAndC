import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [currencyObj, setCurrencyObj] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => setCurrencyObj(res[currency]));
  }, [currency]);
  return currencyObj;
}

export default useCurrencyInfo;

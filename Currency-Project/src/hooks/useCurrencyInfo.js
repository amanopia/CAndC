import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  // Whenever a function mounts or unmounts the useEffect hook's lifecycle event is triggered

  const [data, setData] = useState({}); // puttin in an empty object makes sure that the application won't crash when you put a loop over an empty object
  useEffect(() => {
    // the fetch call is triggered when the function moutns or unmounts
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
        console.log(res);
        console.log(res.json);
        return res.json;
      })
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);

  // since custom hook, we return
}

export default useCurrencyInfo;
// this fetch needs to be called whenever there is a change in the currency, so it becomes a dependency

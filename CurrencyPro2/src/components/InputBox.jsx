import React from "react";
import { useState, useId, useRef } from "react";
import "./InputBox.css";
import Select from "react-select";

// Shadcn
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
//   SelectGroup,
// } from "@/components/ui/select";

const InputBox = ({
  label,
  currencyType,
  currencies,
  onCurrencyChange,
  onAmountChange,
  amount,
  amountDisabled = false,
  currencyDisabled = false,
}) => {
  const amountInputId = useId();
  const currencyInputId = useId();

  const [selectedOption, setSelectedOption] = useState(null);
  function handleChange(selectedOption) {
    console.log(selectedOption.value);
    onCurrencyChange && onCurrencyChange(selectedOption.value);
  }
  const colorStyles = {
    control: (styles) => ({
      ...styles,
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: "#fff", backgroundColor: "black" };
    },
  };
  return (
    <div className="inputs">
      <div className="content-left">
        <label htmlFor={amountInputId}>{label}</label>
        <input
          className="input"
          type="number"
          name=""
          id={amountInputId}
          onChange={(event) =>
            onAmountChange && Number(onAmountChange(event.target.value))
          }
          disabled={amountDisabled}
          value={amount}
        />

        {/* ad disabled, amount to the input */}
      </div>

      <div className="content-right">
        {/* <label htmlFor={currencyInputId}>Choose currency </label> */}
        {/* <select
          style={{ color: "blue" }}
          value={currencyType}
          id={currencyInputId}
          onChange={(event) => {
            onCurrencyChange && onCurrencyChange(event.target.value);
          }}
          disabled={currencyDisabled}>
          {currencies.map((cu) => (
            <option
              onClick={(e) => console.log(e.target.value)}
              key={cu.code}
              style={{ color: "black" }}
              value={cu.code}>
              {cu.code}
            </option>
          ))}
        </select> */}

        <Select
          className="cl-dropdown"
          id={currencyInputId}
          onChange={handleChange}
          options={currencies}
          formatOptionLabel={(element) => (
            <div className="dropdown-options">
              <img src={element.flag} alt={element.value} />
              <span>{element.label}</span>
            </div>
          )}
          styles={colorStyles}></Select>
        {/* Here */}
        {/* <div className="currencies">
          {currencies.map((cu) => (
            <div
              onClick={(e) => console.log(e.target.value)}
              onKeyDown={() => null}
              key={cu.code}
              style={{ color: "black" }}
              value={cu.code}>
              <p>{cu.code}</p>
              <img src={cu.flag} alt={cu.code} />
            </div>
          ))}
        </div> */}
      </div>
      {/* {currencies.map((cu) => (
        <img src={cu.flag} alt={cu.code} />
      ))} */}
    </div>
  );
};

export default InputBox;

// add change functionality on div

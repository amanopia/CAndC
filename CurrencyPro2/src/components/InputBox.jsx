import React from "react";
import { useState, useId } from "react";
import "./InputBox.css";

// Shadcn
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

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
        <label htmlFor={currencyInputId}>Choose currency </label>
        <select
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
        </select>
      </div>
      {/* {currencies.map((cu) => (
        <img src={cu.flag} alt={cu.code} />
      ))} */}
    </div>
  );
};

export default InputBox;

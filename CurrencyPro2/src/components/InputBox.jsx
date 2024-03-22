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
            <option key={cu} style={{ color: "black" }} value={cu}>
              {cu}
            </option>
          ))}
        </select>
        {/* <Select>
          <SelectTrigger className="bg-primary text-primary-foreground">
            <SelectValue placeholder="Choose Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup
              onChange={(event) => console.log(event.target.value)}
              className="bg-primary text-primary-foreground">
              {currencies.map((cu) => (
                <SelectItem
                  onChange={(event) => {
                    console.log(event.target.value);
                  }}
                  key={cu}
                  value={cu}>
                  {cu}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select> */}
      </div>
    </div>
  );
};

export default InputBox;

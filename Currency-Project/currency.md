# Input Box

function InputBox({
label,

    className = "",

}) {

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    label
                </label>
                <input

                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"

                >

                        <option value="usd">
                            usd
                        </option>

                </select>
            </div>
        </div>
    );

}

export default InputBox;

# App.js

function App() {

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"

                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

# Exchange api readme

https://github.com/fawazahmed0/exchange-api?tab=readme-ov-file

<h1 align="center">Free Currency Exchange Rates API</h1>

<p align="center">
  <img width="460" height="300" src="https://github.com/fawazahmed0/exchange-api/raw/main/money.jpg">
</p>

[![Publish-Currencies](https://github.com/fawazahmed0/exchange-api/actions/workflows/run.yml/badge.svg)](https://github.com/fawazahmed0/exchange-api/actions/workflows/run.yml)

#### Features:

- Free & Blazing Fast response
- No Rate limits
- 150+ Currencies, Including Common Cryptocurrencies
- Daily Updated

#### URL Structure:

`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/{apiVersion}/{endpoint}`

#### Formats:

`date`

The date should either be `latest` or in `YYYY-MM-DD` format <br>

The Endpoints Supports HTTP GET Method and returns the data in two formats:

`/{endpoint}.json`

`/{endpoint}.min.json`

#### Endpoints:

- `/currencies`<br>
  > Lists all the available currencies in prettified json format:<br> > https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json <br>

> Get a minified version of it:<br> > https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json <br>

- `/currencies/{currencyCode}`<br>
  > Get the currency list with EUR as base currency:<br> > https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json <br>

> Get the currency list with EUR as base currency on date 2024-03-02:<br> > https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-02/v1/currencies/eur.json <br>

> Get the currency list with BTC as base currency:<br> > https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/btc.json <br>

> Get the currency list with BTC as base currency in minified format:<br> > https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/btc.min.json <br>

#### Additional Fallback URL on Cloudflare:

`https://{date}.currency-api.pages.dev/{apiVersion}/{endpoint}`

> Get the currency list with EUR as base currency:<br> > https://latest.currency-api.pages.dev/v1/currencies/eur.json

> Get the currency list with EUR as base currency on date 2024-03-06:<br> > https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json

**Warning:** Please include [Fallback mechanism](https://github.com/fawazahmed0/exchange-api/issues/90#issue-2168885277) in your code, for example if `cdn.jsdelivr.net` link fails, fetch from `currency-api.pages.dev`

**Migrating from Previous Currency API:** [Read this](https://github.com/fawazahmed0/exchange-api/blob/main/MIGRATION.md)

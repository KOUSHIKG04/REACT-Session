import React, { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import { Inputbox } from "./components/index.js";
import { Button } from "./components/ui/button.jsx";
import { ArrowDownUp } from "lucide-react";

function App() {
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("INR");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convertCurrency = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-500">
      <div className="w-full max-w-lg bg-white rounded-xl p-6 relative">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          CURRENCY CONVERTER
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convertCurrency();
          }}
        >
          <div className="mb-2">
            <Inputbox
              onAmountChange={(amount) => {
                setAmount(amount);
              }}
              label="From"
              onCurencyChange={(currency) => {
                setFrom(currency);
              }}
              currencyOptions={options}
              amount={amount}
              selectedCurrency={from}
            />
          </div>

          <div className="flex justify-center relative w-full h-0.5">
            <Button
              type="button"
              variant="outline"
              onClick={swap}
              className="text-black font-semibold py-2 px-6 rounded-lg shadow-lg"
            >
              Swap <ArrowDownUp />
            </Button>
          </div>

          <div className="mt-4">
            <Inputbox
              onAmountChange={(amount) => {
                setConvertedAmount(amount);
              }}
              label="To"
              onCurencyChange={(currency) => {
                setTo(currency);
              }}
              currencyOptions={options}
              amount={convertedAmount}
              selectedCurrency={to}
            />
          </div>

          <div className="flex justify-center mt-6">
            <Button
              type="submit"
              className="w-full text-white font-semibold py-3 px-4 
              rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              CONVERT
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

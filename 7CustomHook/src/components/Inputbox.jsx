import React, { useState, useId } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown } from "lucide-react";

const Inputbox = ({
  currencyOptions = [],
  onCurencyChange,
  selectedCurrency = "USD",
  amountDisabled = false,
  label,
  amount,
  onAmountChange,
  currencyDisable = false,
  className = "",
}) => {
  const id = useId();

  return (
    <div
      className={`bg-white p-4 rounded-md  flex items-center gap-4 ${className}`}
    >
      <div className="flex flex-col flex-grow">
        <Label htmlFor={id} className="text-gray-600 text-sm font-medium mb-1">
          {label}
        </Label>
        <Input
          id={id}
          type="number"
          className="outline-none w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700"
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
          disabled={amountDisabled}
          value={amount}
          placeholder="Enter amount"
        />
      </div>

      <div className="flex flex-col items-end w-[100px]">
        <Label className="text-gray-600 text-xs font-medium mb-1 mr-3">
          CURRENCY
        </Label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="text-gray-700 border-gray-300 hover:border-gray-400 w-20 h-9"
              disabled={currencyDisable}
            >
              {selectedCurrency}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="text-gray-700 font-medium">
              SELECT CURRENCY
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={selectedCurrency}
              onValueChange={(currency) => {
                onCurencyChange && onCurencyChange(currency);
              }}
            >
              <ScrollArea className="h-40">
                {currencyOptions.map((currency) => (
                  <DropdownMenuRadioItem
                    key={currency}
                    value={currency}
                    className="text-gray-700 hover:bg-gray-100 focus:bg-gray-200"
                  >
                    {currency}
                  </DropdownMenuRadioItem>
                ))}
              </ScrollArea>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Inputbox;

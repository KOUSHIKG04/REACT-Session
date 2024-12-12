import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import useTheme from "@/context/ThemeContext";

const ThemeButton = () => {
    
  const { themeMode, toggleTheme } = useTheme();

  return (
    <div className="mb-6 flex items-center gap-4">
      <p className="text-lg">TOGGLE SWITCH</p>
      <Label
        className="relative inline-block h-8 w-14 cursor-pointer 
      rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent]"
      >
        <Input
          checked={themeMode === "dark"}
          id="AcceptConditions"
          className="peer sr-only"
          onChange={toggleTheme}
          type="checkbox"
        />
        <span
          className="absolute inset-y-0 left-1 m-1 w-6 
        rounded-full bg-gray-300 ring-[6px] ring-inset ring-white 
        transition-all peer-checked:left-8 peer-checked:w-2
        peer-checked:bg-white peer-checked:ring-transparent"
        ></span>
      </Label>
    </div>
  );
};

export default ThemeButton;

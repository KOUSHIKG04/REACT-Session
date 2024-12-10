import React, { useState, useCallback, useEffect, useRef } from "react";
import { Slider } from "./components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";

function App() {

  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);

  const passRef = useRef(null) 

  const generatePassword = useCallback(() => {

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let password = "";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      password += str.charAt(charIndex);
    }

    setPassword(password);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  console.log(password);
  

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <Card
        className="w-[500px] shadow-2xl border-2
       border-white"
      >
        <CardHeader className="items-center">
          <CardTitle className="text-2xl">PASSWORD GENERATOR!!</CardTitle>
          <CardDescription className="text-md">
            It will help you to generate a secure password
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center ">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="text" // if type = 'password' we cant see the password its protected
              value={password}
              placeholder="PASSWORD"
              readOnly
              ref={passRef}
            />
            <Button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(password);
                passRef.current?.select()
              }}
            >
              COPY
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex gap-3 justify-center">
          <span className="text-sm font-medium">LENGTH : {length}</span>
          <Slider
            value={[length]}
            max={16}
            step={2}
            className="w-1/3 cursor-pointer"
            onValueChange={(value) => {
              setLength(value[0]);
            }}
          />

          <div className="flex items-center space-x-1">
            <Input
              type="checkbox"
              id="numbers"
              className="rounded-full"
              checked={numberAllowed}
              onChange={(e) => {
                setNumberAllowed(e.target.checked);
              }}
            />
            <Label
              htmlFor="numbers"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Numbers
            </Label>
          </div>
          <div className="flex items-center space-x-1">
            <Input
              type="checkbox"
              id="characters"
              className="rounded-full"
              checked={charAllowed}
              onChange={(e) => {
                setCharAllowed(e.target.checked);
              }}
            />
            <Label
              htmlFor="characters"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Characters
            </Label>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;

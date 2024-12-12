import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ThemeButton from "./ThemeButton";
import useTheme from "@/context/ThemeContext";

const CardDesign = () => {

  const { themeMode } = useTheme();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 ">
      <ThemeButton />
      <Card className="w-[450px] bg-white dark:bg-gray-800">
        <CardHeader className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            TOGGLE THEME PROJECT
          </h1>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="name"
                  placeholder="ENTER YOUR NAME"
                  className="dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant={themeMode === "dark" ? "secondary" : "outline"}
            className="dark:text-gray-100 dark:bg-gray-500"
          >
            CANCEL
          </Button>
          <Button
            variant={themeMode === "dark" ? "secondary" : "outline"}
            className="dark:text-gray-100 dark:bg-gray-500"
          >
            DEPLOY
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardDesign;

import React from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const myObject = {
    name: "JHON",
    lastName: "DOE",
    age: 26,
    address: {
      city: "NY",
      state: "NY",
      country: "USA",
    },
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Card username="JHON DOE" myObject={myObject} post="software Traniee"/>
      <Card />
    </div>
  );
};

export default App;

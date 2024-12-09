import { useState } from "react";

function App() {
  
  const [color, setColor] = useState();

  return (
    <div
      className="w-full h-screen duration-200"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-32 inset-x-0 px-2">
        <div
          className="flex flex-wrap justify-center gap-3 shadow-2xl
         bg-white px-3 py-2 rounded-2xl border-2"
        >
          <butto
            className=" px-4 py-1 rounded-xl border-2 bg-green-600 shadow-lg
          cursor-pointer text-white"
            onClick={() => {
              setColor("green");
            }}
          ></butto>
          <button
            className=" px-4 py-1 rounded-xl border-2 bg-red-500 shadow-lg
          cursor-pointer text-white"
            onClick={() => {
              setColor("red");
            }}
          ></button>
          <button
            className=" px-4 py-1 rounded-xl border-2 bg-purple-500 shadow-lg
          cursor-pointer text-white"
            onClick={() => {
              setColor("purple");
            }}
          ></button>
          <button
            className=" px-4 py-1 rounded-xl border-2 shadow-lg
          cursor-pointer text-white"
            onClick={() => {
              setColor("");
            }}
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

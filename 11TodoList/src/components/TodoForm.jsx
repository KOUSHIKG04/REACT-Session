import React, { useState } from "react";
import { useTodo } from "@/context";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function TodoForm() {

  const { addTodo } = useTodo(); const [ todo, setTodo ] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({
      todo,
      completed: false,
    });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex ">
      <Input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button
        type="submit"
        className="rounded-r-lg px-3 py-1 ml-3 text-white shrink-0"
      >
       ADD
      </Button>
    </form>
  );
}

export default TodoForm;

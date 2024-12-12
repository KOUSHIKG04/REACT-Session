import React, { useState } from "react";
import { Label } from "./ui/label";
import { useTodo } from "@/context";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function TodoItem({ todo }) {

  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleTodo(todo.id); //console.log(todo.id);
  };

  return (
    <div
      className={`flex items-center border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 
         text-black 
         ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >
      <Label className="relative inline-flex items-center cursor-pointer">
        <Input
          type="checkbox"
          className="sr-only peer "
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <div
          className="ml-2 w-6 h-6 bg-gray-100 peer-checked:bg-green-500 peer-checked:border-green-500
          border border-black/10 flex items-center justify-center rounded-full"
        >
          {todo.completed && "✓"}
        </div>
      </Label>

      <Input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg 
            ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}
            ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <Button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "✅" : "✏️"}
      </Button>

      <Button
        className="inline-flex w-8 h-8 rounded-lg text-sm border
         border-black/10 justify-center items-center bg-gray-50
         hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </Button>
    </div>
  );
}

export default TodoItem;

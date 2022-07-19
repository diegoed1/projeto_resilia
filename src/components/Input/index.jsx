import React from "react";
import { InputBox } from "./styles.js";

function Input({ value, onChange, addToDo }) {
  return (
    <>
      <InputBox
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Create a new todo.."
        onKeyDown={addToDo}
      />
    </>
  );
}

export default Input;
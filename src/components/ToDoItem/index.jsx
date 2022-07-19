import React from "react";
import { Icon, Item, TitleItem } from "./styles.js";
import { BsCheckCircleFill } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";

function ToDoItem({ isCompleted, id, name, deleteToDo, completeToDo }) {
  return (
    <Item>
      <Icon isCompleted={isCompleted}>
        <BsCheckCircleFill fontSize={"1rem"} onClick={() => completeToDo(id)} />
      </Icon>
      <TitleItem isCompleted={isCompleted}>{name}</TitleItem>
      <Icon>
        <VscChromeClose fontSize={"1rem"} onClick={() => deleteToDo(id)} />
      </Icon>
    </Item>
  );
}

export default ToDoItem;
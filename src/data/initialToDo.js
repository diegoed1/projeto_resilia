import { v4 as uuid } from "uuid";

export const initialListToDo = [
  { isCompleted: true, name: "Complete online JavaScript course", id: uuid() },
  { isCompleted: false, name: "Jog around the park 3x", id: uuid() },
  { isCompleted: false, name: "10 minutes meditation", id: uuid() },
  { isCompleted: false, name: "Read for 1 hour", id: uuid() },
  { isCompleted: false, name: "Pick up groceries", id: uuid() },
  {
    isCompleted: false,
    name: "Complete Todo App on FrontEnd Mentor",
    id: uuid(),
  },
];
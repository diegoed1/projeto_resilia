import React, { useEffect, useState } from "react";
import Input from "../Input";
import ToDoItem from "../ToDoItem";
import { v4 as uuid } from "uuid";
import { Container, ListContainer } from "./styles.js";
import ListInfo from "../ListInfo";
import { initialListToDo } from "../../data/initialToDo.js";

function ToDoContainer() {
  const [input, setInput] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const filterOptions = [
    {
      name: "All",
      filter: () => filterAllItems(),
      id: "all",
    },
    {
      name: "Active",
      filter: () => filterActiveItems(),
      id: "active",
    },
    {
      name: "Completed",
      filter: () => filterCompletedItems(),
      id: "completed",
    },
  ];

  useEffect(() => {
    setList([...initialListToDo]);
    setFilteredList([...initialListToDo]);
    setSelectedOption(filterOptions[0].id);
  }, []);

  useEffect(() => {
    const prevList = list;
    setFilteredList([...prevList]);
    setQuantity(prevList.length);
  }, [list, setList]);

  const addToDo = (e) => {
    if (e.keyCode === 13) {
      if (!input.length > 0) {
        return alert("Digite alguma coisa!");
      }
      const newToDo = {
        isCompleted: false,
        name: input,
        id: uuid(),
      };
      setList((prevList) => [...prevList, newToDo]);
      setQuantity((prevQuantity) => prevQuantity + 1);
      setInput("");
    }
  };

  const completeToDo = (id) => {
    const prevItem = list.find((item) => item.id === id);
    const updatedItem = {
      ...prevItem,
      isCompleted: !prevItem.isCompleted,
    };
    const indexItem = list.findIndex((item) => item.id === id);
    const updatedList = list;
    updatedList[indexItem] = updatedItem;
    setList(() => [...updatedList]);
  };

  const deleteToDo = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(() => [...newList]);
  };

  const filterAllItems = () => {
    const allItems = list;
    setFilteredList([...allItems]);
    setQuantity(allItems.length);
  };
  const filterActiveItems = () => {
    const activeItems = list.filter((item) => item.isCompleted === false);
    setFilteredList([...activeItems]);
    setQuantity(activeItems.length);
  };
  const filterCompletedItems = () => {
    const completedItems = list.filter((item) => item.isCompleted === true);
    setFilteredList([...completedItems]);
    setQuantity(completedItems.length);
  };

  const clearCompleted = () => {
    const withoutCompleted = list.filter((item) => item.isCompleted === false);
    setList([...withoutCompleted]);
  };
  return (
    <Container>
      <Input value={input} onChange={setInput} addToDo={addToDo} />
      <ListContainer>
        {filteredList.map((item) => (
          <ToDoItem
            key={item.id}
            isCompleted={item.isCompleted}
            name={item.name}
            id={item.id}
            deleteToDo={deleteToDo}
            completeToDo={completeToDo}
          />
        ))}
        <ListInfo
          quantity={quantity}
          filterOptions={filterOptions}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          clearCompleted={clearCompleted}
        />
      </ListContainer>
    </Container>
  );
}

export default ToDoContainer;
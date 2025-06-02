import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/Todo-items-store";

const TodoItems = () => {
  const {todoItems} =useContext(TodoItemsContext);
  
  console.log("Rendering items:", todoItems);


  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem key = {item.id} id={item.id} todoDate={item.dueDate} todoName={item.name} ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
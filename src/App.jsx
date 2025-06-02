import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import React from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoItemsContextProvider from "./store/Todo-items-store"; 

import "./App.css";

function App() {


  return (
    <TodoItemsContextProvider>
    <center className="todo-container">
      
      <AppName />
      <WelcomeMsg></WelcomeMsg>
      <AddTodo/>
      
      <TodoItems></TodoItems>
      
     
    </center>
    </TodoItemsContextProvider>
  );
}

export default App;
import React, {useContext, useState} from "react";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/Todo-items-store";
function AddTodo() {
  const {addNewItem}=useContext(TodoItemsContext);
  const[todoName, setName]=useState("");
  const[todoDate, setDate]=useState("");
  const handleName = (event) =>{
setName(event.target.value)
  };
  const handleDate = (event) =>{
    setDate(event.target.value)
  };
  const handleAddButtonClicked = () =>{
    addNewItem(todoName, todoDate);
    setName("");
    setDate("");
  };
    return (
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" value={todoName} placeholder="Enter Todo Here" onChange={handleName} />
          </div>
          <div className="col-4">
            <input type="date" value={todoDate} onChange={handleDate}/>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClicked}>
            <BiSolidMessageSquareAdd />
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddTodo;
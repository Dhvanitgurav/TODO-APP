import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/Todo-items-store";
function TodoItem({ todoName, todoDate, id }) {
  const {deleteItem} =useContext(TodoItemsContext);
    return (
      <div className="container todo-item">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button" onClick={() => deleteItem(id)}>
            <MdDelete />
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoItem;
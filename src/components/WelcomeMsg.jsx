import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";

const WelcomeMsg = () =>{
const {todoItems} =useContext(TodoItemsContext);

return (
 todoItems.length===0 && <h3>Enjoy Your Day!</h3>

);
};
export default WelcomeMsg;
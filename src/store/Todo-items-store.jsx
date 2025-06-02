import { createContext, useReducer } from "react";

export const TodoItemsContext=createContext({
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {},
});
const todoItemsReducer = (currValue, action) =>{
    
    if(action.type==="NEW_ITEM"){
    return [
    
      ...currValue, {
        name: action.payload.todoName, dueDate: action.payload.todoDate, id: action.payload.id,
      },
  ]
  
  
  
    }
    else if(action.type==="DELETE_ITEM"){
        return currValue.filter((item) => item.id!=action.payload.id);
    }
  
  return currValue;
  };
const TodoItemsContextProvider = ({children}) =>{
    const [todoItems, dispatchTodoItems]=useReducer(todoItemsReducer, []);

 
    const addNewItem = (todoName, todoDate) =>{
    const newItemAction={
      type:"NEW_ITEM",
      payload:{ 
        id: crypto.randomUUID()
    
    
        , 
        todoName, 
        todoDate,
    
      },
    }
    dispatchTodoItems(newItemAction);
    
    
    };
    const deleteItem = (id) =>{
      
    
    const deleteAction={
      type:"DELETE_ITEM",
      payload:{
        id:id,
      },
    }
    dispatchTodoItems(deleteAction);
    };
    return(
    <TodoItemsContext.Provider value={{
        todoItems:todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}>{children}</TodoItemsContext.Provider>
    );
}
export default TodoItemsContextProvider;
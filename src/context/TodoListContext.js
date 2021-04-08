import React, { useState, createContext } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const [todos, setTodos] = useState([
      { id: 1, name: "test" }       
    ]);

  const addTodo = (name) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        name,
      },
    ]);
  };

  const deleteTodo =(id)=>{
      setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <TodoListContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;

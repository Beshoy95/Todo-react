import React, { useState, useEffect ,createContext } from "react";
export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todosListApp")) || []);

  useEffect(() => {
    localStorage.setItem("todosListApp", JSON.stringify(todos));
  }, [todos]);

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

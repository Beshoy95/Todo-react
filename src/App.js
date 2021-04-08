import React from 'react'
import TodoList from "./components/TodoList";
import TodoListContextProvider from "./context/TodoListContext";
import TodoInput from './components/TodoInput';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return (
    <>   
    <TodoListContextProvider>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div>
          <h2 className="text-center">Todo App</h2>
          <TodoInput/>
         <TodoList />
          </div>
      
       
      
        </div>
      
      </div>
       
      </TodoListContextProvider>
    </>);
}

export default App;
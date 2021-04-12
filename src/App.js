import React from 'react'
import TodoList from "./components/TodoList";
import TodoListContextProvider from "./context/TodoListContext";
import TodoInput from './components/TodoInput';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Input from './stories/Input/Input';
import Button from './stories/Button/Button';
import Headline from './stories/Headline/Headline';

const App = () => {
    return (
    <>  
    
    <div className="storybook container mt-5 mx-2">  
    <Headline/>
    <div className="d-flex">
    <Input/>
    <Button/>
    </div>  
    </div> 
   
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
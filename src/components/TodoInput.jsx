import React, { useState,useContext } from 'react';
import { TodoListContext } from './../context/TodoListContext';

const TodoInput = () => {
    const [name, setName] = useState("")
    const {addTodo} = useContext(TodoListContext)
   
   const handleSubmit=(e)=>{
        e.preventDefault(); 
        addTodo(name);
        setName('')
   }

    return (
        <>
            <input
             type="text" 
             name="text" 
             value={name}
             onChange={(e) => setName(e.target.value)} />
            <button onClick={handleSubmit} className="btn btn-info">Add todo</button>
        </>);
}

export default TodoInput;
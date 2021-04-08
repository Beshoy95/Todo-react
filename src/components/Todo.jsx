import React,{useContext} from 'react';
import { TodoListContext } from './../context/TodoListContext';

const Todo = ({ todo }) => {
    const {deleteTodo} = useContext(TodoListContext)
    return (
    <>
        <div style={{display:'flex'}}>
            <p>{todo.name}</p>
            <button onClick={()=>deleteTodo(todo.id)} className="btn btn-danger mx-2">Delete</button>
        </div>
    </>);
}

export default Todo;
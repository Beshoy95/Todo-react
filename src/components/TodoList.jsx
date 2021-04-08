import React, { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';
import Todo from './Todo';

const TodoList = () => {
    const {todos}  = useContext(TodoListContext)
    return (
        <div>
           {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>);
}

export default TodoList;
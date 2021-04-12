import React, { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';
import { Badge } from "@chakra-ui/react";
import Todo from './Todo';

const TodoList = () => {
    const { todos } = useContext(TodoListContext)

    if (!todos.length) {
        return (
            <Badge
                colorScheme="blue"
                borderRadius="lg"
                p="4"
                m="4"
            >No todolist </Badge>
        )
    }
    return (
        <>
            {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
        </>);
}

export default TodoList;
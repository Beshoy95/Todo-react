import React, { useState, useContext } from 'react';
import { TodoListContext } from './../context/TodoListContext';
import { Button, Input, HStack,useToast } from "@chakra-ui/react";

const TodoInput = () => {
    const [name, setName] = useState("")
    const { addTodo } = useContext(TodoListContext)
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name){
            toast({
                title: "No content",       
                status: "error",
                duration: 2000,
                isClosable: true,
              })
              return
        }
        addTodo(name);
        setName('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <HStack mb="6">
                    <Input
                        variant="filled"
                        name="text"
                        value={name}
                        placeholder="Enter your text..."
                        onChange={(e) => setName(e.target.value)} />
                    <Button
                        colorScheme="pink"
                        px="8"
                        type="submit"
                    >
                        Add todo
           </Button>
                </HStack>
            </form>
        </>);
}

export default TodoInput;
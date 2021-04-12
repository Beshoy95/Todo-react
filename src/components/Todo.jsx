import React, { useContext } from 'react';
import { TodoListContext } from './../context/TodoListContext';
import { IconButton, HStack, Text, Spacer, VStack, StackDivider } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Todo = ({ todo }) => {
    const { deleteTodo } = useContext(TodoListContext)
    return (
        <>
            <VStack
                divider={<StackDivider />}
                borderColor="gray.100"
                borderWidth="2px"
                borderRadius="lg"
                p="4"
                w="100%"
                maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
                alignItems="stretch"
            >
                <HStack>
                    <Text>{todo.name}</Text>
                    <Spacer/>
                    <IconButton
                        isRound="true"
                        icon={<FaTrash />}
                        onClick={() => deleteTodo(todo.id)} />
                </HStack>
            </VStack>
        </>);
}

export default Todo;
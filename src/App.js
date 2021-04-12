import React from 'react'
import TodoList from "./components/TodoList";
import TodoListContextProvider from "./context/TodoListContext";
import TodoInput from './components/TodoInput';
import {Text,Heading,VStack,IconButton, useColorMode} from "@chakra-ui/react";
import Input from './stories/Input/Input';
import Button from './stories/Button/Button';
import Headline from './stories/Headline/Headline';
import { FaSun, FaMoon } from "react-icons/fa";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
    return (
    <>  
    
    <div>  
    <Headline/>
    <Input/>
    <Button/>
    </div> 
   
    <TodoListContextProvider>    
       <VStack p={4}>
       
       <IconButton 
       icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
       isRound={true}
       alignSelf="flex-end"
       onClick={toggleColorMode}/>

            <Heading 
             mb="8"
            fontWeight="extrabold"
            bgGradient="linear(to-r,pink.500,pink.300,blue.500)"
            bgClip="text">
              <Text mb="8">TODO App </Text>  
            </Heading>

          <TodoInput/>
         <TodoList />      
      </VStack>
      </TodoListContextProvider>
    </>);
}

export default App;
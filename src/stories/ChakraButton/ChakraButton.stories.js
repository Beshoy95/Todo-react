import React from 'react';
import { Button, ButtonGroup } from "@chakra-ui/react";

export default{
    title:'Chakra/Button',
    component:Button,
    
}
const Template = args => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
  variantColor:'green',
  children:'asdasd'
}


import React from 'react';
import Input from './Input';

export default{
  title:'Form/Input',
  component:Input
}

const Template = (args) => <Input {...args}/>

export const Small = Template.bind({})
Small.args={
    size:'small',
    placeholder:'Enter your text...'
}

export const Meduim = Template.bind({})
Meduim.args={
    size:'meduim',
    placeholder:'Enter your text...'
}

export const Large = Template.bind({})
Large.args={
    size:'large',
    placeholder:'Enter your text...'
}
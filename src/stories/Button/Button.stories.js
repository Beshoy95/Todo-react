import React from 'react';
import Button from './Button';

export default{
   title:'Form/Button',
   component:Button,
   argTypes: { onClick: { action: 'clicked', } },
}

const Template =(args)=><Button {...args}/>

export const Primary = Template.bind({})
Primary.args={
  variant:'primary',
  children:'Add Todo',
}

export const Secondary = Template.bind({})
Secondary.args={
  variant:'secondary',
  children:'Add Todo',

}

export const Success = Template.bind({})
Success.args={
  variant:'success',
  children:'Add Todo'
}

export const Danger = Template.bind({})
Danger.args={
  variant:'danger',
  children:'Add Todo'
}

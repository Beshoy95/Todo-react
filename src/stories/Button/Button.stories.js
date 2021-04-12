import React from 'react';
import Button from './Button';

export default{
   title:'Form/Button',
   component:Button
}

const Template =(args)=><Button {...args}/>

export const Primary = Template.bind({})
Primary.args={
  variant:'primary',
}

export const Secondary = Template.bind({})
Secondary.args={
  variant:'secondary'
}

export const Success = Template.bind({})
Success.args={
  variant:'success'
}

export const Danger = Template.bind({})
Danger.args={
  variant:'danger'
}

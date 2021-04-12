import React from 'react';
import Headline from "./Headline";

export default{
    title:'Form/Headline',
    component:Headline
}

const Template = (args) =><Headline {...args}/>

export const SmallHeadline = Template.bind({})
SmallHeadline.args={
    header:'small'
}

export const MeduimHeadline = Template.bind({})
MeduimHeadline.args={
    header:'meduim'
}

export const largeHeadline = Template.bind({})
largeHeadline.args={
    header:'large'
}
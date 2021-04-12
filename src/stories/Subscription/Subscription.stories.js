import React from 'react';
import { Primary } from '../Button/Button.stories';
import { SmallHeadline } from '../Headline/Headline.stories';
import { Small } from '../Input/Input.stories';

export default{
    title:'Form/Subscription'
}

export const PrimarySubscription = () => (
    <>
    <SmallHeadline/>
      <Primary/>    
      <Small/>
    </>
)
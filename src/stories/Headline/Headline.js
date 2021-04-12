import React from 'react'
import './Headline.css';

function Headline(props) {
    const {header='small' ,children,...args} =props
    return (
        <div>
            <h3 className={`text ${header} mx-5`} {...args}>TODO APP</h3>
        </div>
    )
}

export default Headline

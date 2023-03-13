import React, { useState } from 'react';

function TodoForm(props) {

    const [input, setInput] = useState('');

    const changed = e => {
        setInput(e.target.value)
    }

    const submited = e => {
        e.preventDefault();

        // props.onSubmit ({
        //     id: Math.floor(Math.random()*10000),
        //     text: input
        // })
        setInput('');
    }

    return (
        <form className='' onSubmit={submited}>
            <input 
            type='text' 
            placeholder='Add a todo' 
            value={input} 
            name='text'
            onChange={changed} 
            />
            <button className=''>Add Todo</button>
        </form>
    )
}

export default TodoForm
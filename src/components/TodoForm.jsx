import { Input } from 'postcss';
import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {

    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })

    const changed = e => {
        setInput(e.target.value)
    }

    const submited = e => {
        e.preventDefault();

        props.onSubmit ({
            id: Math.floor(Math.random()*10000),
            text: input
        })
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
            ref={inputRef} 
            />
            <button className=''>Add Todo</button>
        </form>
    )
}

export default TodoForm
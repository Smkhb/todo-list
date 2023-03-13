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
        <form className='todo-form' onSubmit={submited}>
            <input 
            type='text' 
            placeholder='Insira a Tarefa' 
            value={input} 
            name='text'
            onChange={changed}
            ref={inputRef} 
            className='todo-input'
            />
            <button className='todo-button edit'>Adicionar</button>
        </form>
    )
}

export default TodoForm
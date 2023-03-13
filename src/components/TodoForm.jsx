import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const changed = e => {
        setInput(e.target.value)
    }

    const submited = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('');
    }

    return (
        <form className='todo-form' onSubmit={submited}>
            {props.edit ? (
                <><input
                    type='text'
                    placeholder='Atualize a Tarefa'
                    value={input}
                    name='text'
                    onChange={changed}
                    ref={inputRef}
                    className='todo-input edit' /><button className='todo-button edit'>Atualizar</button></>) : (
                <><input
                    type='text'
                    placeholder='Insira a Tarefa'
                    value={input}
                    name='text'
                    onChange={changed}
                    ref={inputRef}
                    className='todo-input' /><button className='todo-button'>Adicionar</button></>)}
        </form>
    )
}

export default TodoForm
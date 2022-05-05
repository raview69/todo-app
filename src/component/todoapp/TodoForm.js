import React, { useState, useEffect, useRef } from 'react'

function TodoForm(dos) {
    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        dos.onSubmit({
            id: Math.floor(Math.random() * 1000000),
            text: input,
        })

        setInput('')
    }

    return (
        <form className="text-center py-6" onSubmit={handleSubmit}>
            <input
                type="text"
                className="text-3xl p-1 border-2 border-slate-800 rounded-md dark:bg-white"
                placeholder="Add a todo"
                value={input}
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="text-3xl ml-4 p-1 px-3 border-2 border-slate-800 rounded-md dark:bg-white dark:text-black ">
                Add
            </button>
        </form>
    )
}

export default TodoForm

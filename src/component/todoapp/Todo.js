/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai'
import TodoForm from './TodoForm'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    })

    const submitUpdate = (value) => {
        updateTodo(edit.id, value)
        setEdit({ id: null, value: '' })
    }

    if (edit.id) {
        return (
            <div className="absolute -mt-24 h-32 w-full bg-black">
                <TodoForm edit={edit} onSubmit={submitUpdate} />
            </div>
        )
    }

    return todos
        .slice(0)
        .reverse()
        .map((todo, index) => (
            <div key={index} className="flex items-center justify-center ">
                <div
                    key={todo.id}
                    onClick={() => completeTodo(todo.id)}
                    className="text-3xl text-black w-2/5 dark:text-white"
                >
                    {index + 1}.&nbsp;
                    {todo.text}
                </div>
                <div className="flex">
                    <AiOutlineClose
                        onClick={() => removeTodo(todo.id)}
                        className="text-black w-6 h-6 dark:text-white"
                    />
                    <AiOutlineEdit
                        onClick={() =>
                            setEdit({ id: todo.id, value: todo.text })
                        }
                        className="text-black w-6 h-6 dark:text-white"
                    />
                </div>
            </div>
        ))
}

export default Todo

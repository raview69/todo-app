import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodo] = useState([])

    const addTodo = (todo) => {
        const newTodo = [todo, ...todos]
        setTodo(newTodo)
        console.log(...todos)
    }
    const completeTodo = (id) => {
        let updateTodo = todos.map((todo) => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        })
        setTodo(updateTodo)
    }
    const removeTodo = (id) => {
        const removeArr = [...todos].filter((todo) => todo.id !== id)
        setTodo(removeArr)
    }

    const updateTodo = (todoId, newValue) => {
        setTodo((prev) =>
            prev.map((item) => (item.id === todoId ? newValue : item))
        )
    }
    return (
        <div className="block-center pt-10 block-center">
            <h1 className="text-7xl font-bold capitalize text-gray-500 dark:text-white text-center dark:text-7xl pt-4">
                What would you like to do?
            </h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList

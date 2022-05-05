import React from 'react'
// import TodoForm from './component/todoapp/TodoForm'
import TodoList from '../component/todoapp/TodoList'
// import Todo from '../component/todoapp/Todo'
import { ThemeProvider } from '../component/darkMode/ThemeContext'
import Background from '../component/darkMode/Background'
import Toggle from '../component/darkMode/ThemeToggle'

const Home = () => {
    return (
        <ThemeProvider>
            <Background>
                <div className="absolute right-0 top-0 pr-2 pt-2">
                    <Toggle />
                </div>
                <TodoList />
            </Background>
        </ThemeProvider>
    )
}

export default Home

import React from 'react'
// import TodoForm from './component/todoapp/TodoForm'
// import TodoList from './component/todoapp/TodoList'
// // import Todo from './component/todoapp/Todo'
// import { ThemeProvider } from './component/background/ThemeContext'
// import Background from './component/background/Background'
// import Toggle from './component/background/ThemeToggle'
// import Navbar from './component/navbar/Navbar'
import Home from './page/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

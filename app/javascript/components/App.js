import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Greeting from './Greeting'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Greeting/>}/>
        </Routes>
    </div>
  )
}

export default App
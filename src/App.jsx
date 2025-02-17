import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Places from './components/Places'
import Blog from './components/Blog'
import { Route, Routes } from 'react-router-dom'
import HeaderLayout from './Layouts/HeaderLayout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HeaderLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/places' element={<Places />} />
          <Route path='/blog' element={<Blog />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

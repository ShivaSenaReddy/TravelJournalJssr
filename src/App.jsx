import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Places from './components/Places.jsx'
import Blog from './components/Blog'
import { Route, Routes } from 'react-router-dom'
import HeaderLayout from './Layouts/HeaderLayout'
import Experience from './components/Experience'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HeaderLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/places' element={<Places />} />
          <Route path='/blog' element={<Blog />} />
          <Route path=':id' element={<Experience />} />
          <Route path='*' element={<h1>NOt Found</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App

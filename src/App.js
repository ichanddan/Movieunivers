import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from './components/Header and Footer/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
    <Routes>
      {/* <Route path='/' element={}/> */}
    </Routes>
    </BrowserRouter>
  )
}

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header and Footer/Header'
import Movie from './components/Movie/Movie'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
    <Routes>
      <Route path='/' element={<Movie/>}/>
    </Routes>
    </BrowserRouter>
  )
}

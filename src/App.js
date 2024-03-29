import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header and Footer/Header'
import Movie from './components/Movie/Movie'
import { Footer } from './components/Header and Footer/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
    <Routes>
      <Route path='/' element={<Movie/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

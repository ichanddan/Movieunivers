import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header and Footer/Header'
import Movie from './components/Movie/Movie'
import { Footer } from './components/Header and Footer/Footer'
import { AddMovie } from './components/Movie/AddMovie'
import { Moviedetails } from './components/Movie/Moviedetails'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
    <Routes>
      <Route path='/' element={<Movie/>}/>
      <Route path='/addmovie' element={<AddMovie/>}/>
      <Route path='/details/:id' element={<Moviedetails/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

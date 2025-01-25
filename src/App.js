import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header and Footer/Header'
import { Footer } from './components/Header and Footer/Footer'
import SignUp from './components/Accounts/SingUp'
import LogIn from './components/Accounts/LogIn'
import Profile from './components/Header and Footer/Profile'
import { Moviedetails } from './pages/Moviedetails'
import { AddMovie } from './pages/AddMovie'
import Movie from './pages/Movie'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
    <Routes>
      <Route path='/' element={<Movie/>}/>
      <Route path='/addmovie' element={<AddMovie/>}/>
      <Route path='/details/:id' element={<Moviedetails/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

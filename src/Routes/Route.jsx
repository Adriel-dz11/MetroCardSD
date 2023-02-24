import React from 'react'
import { Routes, Route, Link, BrowserRouter, Navigate } from 'react-router-dom'
import { Header } from '../Layout/Header'
import { SideBar } from '../Layout/SideBar'
import { Account } from '../Pages/Account'
import { Cards } from '../Pages/Cards'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Payments } from '../Pages/Payments'

export const Route = () => {
  return (
    < BrowserRouter >
      {/* Cabecera o Header */}
      <div className='menu'>
        <SideBar />
        <Header/>
      </div>
      {/* Cuerpo de la pagina */}
      <div className='project'>
        <Routes>
          <Route path='/' element={<Navigate to="/login"/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/account' element={<Account />} />
          <Route path="/payments" element={<Payments/>}/>
          <Route path="/cards" element={<Cards/>}/>
          <Route path='*' element={<Error />} />
        </Routes>
      </div>

    </BrowserRouter >
  )
}
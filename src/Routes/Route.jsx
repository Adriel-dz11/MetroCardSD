import React, { useState } from 'react'
import { Routes, Route as Router, Link, BrowserRouter, Navigate } from 'react-router-dom'
import { Header } from '../Layout/Header'
import { SideBar } from '../Layout/SideBar'
import { Account } from '../Pages/Account'
import { Cards } from '../Pages/Cards'
import { Error } from '../Pages/Error'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Payments } from '../Pages/Payments'

export const Route = () => {

  const [login, setLogin] = useState(false)
  return (
    < BrowserRouter >
      {login ?
      <>
        <div className='menu'>
          <SideBar />
          <Header />
        </div>
      <div className="">
        <Routes>
          <Router path='/' element={<Navigate to="/login" />} />
          <Router path='/login' element={<Login />} />
          <Router path='/home' element={<Home />} />
          <Router path='/account' element={<Account />} />
          <Router path="/payments" element={<Payments />} />
          <Router path="/cards" element={<Cards />} />
          <Router path='*' element={<Error />} />
        </Routes>
      </div>
      </>
      :
      <Login />}


    </BrowserRouter >
  )
}
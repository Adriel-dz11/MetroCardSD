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
import { useDispatch, useSelector } from "react-redux";

export const Route = () => {

  const [login, setLogin] = useState(false)
  
  const isAuthenticated = useSelector(state => state.generalState.isAuthenticated);
  return (
    < BrowserRouter >
      {isAuthenticated ?
      <>
        <div className='menu'>
          <SideBar />
          <Header />
        </div>
      <div className="ml-[360px] mt-32">
        <Routes>
          <Router path='/' element={<Navigate to="/home" />} />
          <Router path='/home' element={<Home />} />
          <Router path='/account' element={<Account />} />
          <Router path="/payments" element={<Payments />} />
          <Router path="/cards" element={<Cards />} />
          <Router path="/support" element={<Cards />} />
          <Router path='*' element={<Error />} />
        </Routes>
      </div>
      </>
      :
      <>
        <div className='menu'>
          <SideBar />
          <Header />
        </div>
      <div className="">
        <Routes>
          <Router path='/' element={<Navigate to="/login" />} />
          <Router path='/login' element={<Login />} />
          <Router path='*' element={<Navigate to="/login" />} />
        </Routes>
      </div>
      </>}


    </BrowserRouter >
  )
}
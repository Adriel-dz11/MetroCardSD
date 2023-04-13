import React, { useState } from 'react'
import { Routes, Route as Router, Link, BrowserRouter, Navigate } from 'react-router-dom'
import { Header } from '../Components/Layout/Header'
import { SideBar } from '../Components/Layout/SideBar'
import { Account } from '../Pages/Account/index'
import { Cards } from '../Pages/Cards/index'
import { Error } from '../Pages/NotFound/index'
import { Home } from '../Pages/Home/index'
import { Login } from '../Pages/Login/index'
import { Payments } from '../Pages/Payments/index'
import { useDispatch, useSelector } from "react-redux";
import PopUp from '../Components/Popup/index'
import Layout from '../Pages/Layout/index'

export const Route = () => {

  const [login, setLogin] = useState(false)

  const isAuthenticated = useSelector(state => state.generalState.isAuthenticated);
  return (
    < BrowserRouter >
      {isAuthenticated ?
        <div className='absolute'>
          <div className='menu'>
            <SideBar />
            <Header />
          </div>
          <div className="ml-[360px] mt-[120px]">
            <Routes>
              <Router path='/' element={<Layout />} >
              <Router path='/home' element={<Home />} />
              <Router path='/account' element={<Account />} />
              <Router path="/payments" element={<Payments />} />
              <Router path="/cards" element={<Cards />} />
              <Router path="/support" element={<Cards />} />
              <Router path='*' element={<Error />} />
              </Router>
            </Routes>
          </div>
        </div>
        :
        <>
          <div className="">
            <Routes>
              <Router path='/' element={<Layout />}>
                <Router path='/login' element={<Login />} />
                <Router path='*' element={<Navigate to="/login" />} />
              </Router>
            </Routes>
          </div>
        </>}


    </BrowserRouter >
  )
}
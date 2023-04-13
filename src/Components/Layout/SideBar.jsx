import React from 'react'
import logo from '../../Assets/Img/logo.png'
import line1 from '../../Assets/Img/Line1.png'
import fotouser from '../../Assets/Img/fotouser.png'
import { NavLink, Link, Navigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faFileAlt, faBriefcase, faCog } from '@fortawesome/free-solid-svg-icons'

export const SideBar = () => {
    return (
        <div>
            <section className='w-[280px] h-full bg-[#1E1E2D] fixed'>
                <div>
                    <img src={logo} className='ml-14 w-2/4' />
                    <img src={line1} className='mt-2' />
                </div>
                <div className='text-center text-[#D9D9D9] mt-5 text-[22px]'>
                    <img src={fotouser} className='mx-auto mb-4 w-2/4 rounded-xl' />
                    <h1>Alexander Coronado</h1>
                    <span className='text-[14px]'>Alexander_Coronado027@outlook.com</span>
                    <h1 className='text-[#10642E] font-black'>Saldo: RD$400</h1>
                    <img src={line1} className='mt-4' />
                </div>
                <div>
                <nav className='text-[#D9D9D9] mt-10 ml-8 space-y-4'>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/home"
                    className='block hover:scale-[1.1] hover:text-white transition'
                >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" className='mr-4'/>
                Home
                </NavLink>


                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/account"
                    className='block hover:scale-[1.1] hover:text-white transition'
                >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" className='mr-4'/>
                Informacion Personal
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"    
                    className='block hover:scale-[1.1] hover:text-white transition'
                    to="/cards"
                >
                    <FontAwesomeIcon icon={faFileAlt} color="#4d4d4e" className='mr-4'/>
                    Tarjetas
                </NavLink>


                <NavLink
                    exact="true"
                    activeclassname="active"
                    className='block hover:scale-[1.1] hover:text-white transition'
                    to="/payments"
                >
                    <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" className='mr-4' />
                    Metodos de Pago
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"
                    className='block hover:scale-[1.1] hover:text-white transition'
                    to="/support"
                >
                    <FontAwesomeIcon icon={faCog} color="#4d4d4e" className='mr-4' />
                    Soporte
                </NavLink>
            </nav>
                </div>
            </section>
        </div>
    )
}

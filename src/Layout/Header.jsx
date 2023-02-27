import React from 'react'
import { NavLink, Link, Navigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faFileAlt, faBriefcase, faCog } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <section>
        <div className='w-full ml-[280px] h-[75px] bg-white drop-shadow-xl fixed flex'>
        <nav className='text-[#707388] ml-20 mt-6 space-x-16 flex'>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/home"
                    className='block'
                >
                Home
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"    
                    className='block'
                    to="/rfiles"
                >
                    Dashboard
                </NavLink>


                <NavLink
                    exact="true"
                    activeclassname="active"
                    className='block'
                    to="/workspace"
                >
                    About Us
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"
                    className='block'
                    to="/account"
                >
                    Contact Us
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"
                    className='block'
                    to="/account"
                >
                    Chat Online
                </NavLink>
            </nav>

            <button className='w-[166px] h-[40px] bg-[#181C32] mt-4 ml-[36%] text-[#D4D4D4] rounded-[25px]'>Cerrar Session</button>
        </div>
    </section>
  )
}
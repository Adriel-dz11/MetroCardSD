import React from 'react'
import { NavLink, Link, Navigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faFileAlt, faBriefcase, faCog } from '@fortawesome/free-solid-svg-icons'
import useLogin from "../Components/Login/useLogin";

export const Header = () => {
    
  const { CloseSession} = useLogin()

  return (
    <section>
        <div className='w-full ml-[280px] h-[75px] bg-white drop-shadow-xl fixed flex'>
        <nav className='text-[#707388] ml-20 mt-6 space-x-16 flex'>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/home"
                    className='block hover:scale-[1.1] hover:text-black transition'
                >
                Home
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"    
                    className='block hover:scale-[1.1] hover:text-black transition'
                    to="/rfiles"
                >
                    Dashboard
                </NavLink>


                <NavLink
                    exact="true"
                    activeclassname="active"
                    className='block hover:scale-[1.1] hover:text-black transition'
                    to="/workspace"
                >
                    About Us
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"
                    className='block hover:scale-[1.1] hover:text-black transition'
                    to="/account"
                >
                    Contact Us
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"
                    className='block hover:scale-[1.1] hover:text-black transition'
                    to="/account"
                >
                    Chat Online
                </NavLink>
            </nav>

            <button onClick={CloseSession} className='w-[166px] h-[40px] bg-[#181C32] mt-4 ml-60 2xl:ml-100 text-[#FFFFFF] rounded-[25px]'>Cerrar Session</button>
        </div>
    </section>
  )
}

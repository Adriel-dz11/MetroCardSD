//libs
import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
//action
import { useLoading } from "../../hooks/useLoading";
import { useDispatch } from 'react-redux';
import {setIsAuthenticated }from '../../Redux/generalStateSlice'
import {setAuthToken }from '../../Redux/generalStateSlice'
import http from '../../services/httpAxios';

const useLogin = () => {
    const navigate = useNavigate();
    const context = useOutletContext()
    const AuthenticationDispatch = useDispatch()
    const { setLoading } = useLoading()
    const [isValid, setisValid] = useState(true);
    const [validationMessage, setvalidationMessage] = useState("");

    useEffect(() => {
        setLoading(false)
    }, []);

    const validateLogin = async (event, usuario, pass) => {
        const input = {
            user: usuario,
            password: pass
        }
        setLoading(true);
        let response = await http.post("user/login", input ).catch(error => {
            setLoading(false)
            context.openPopup('internet')
        })
        const { message, result, success } = response.data;
        if (success == true) {
            navigate("/Home");
            AuthenticationDispatch(setAuthToken(result));
            AuthenticationDispatch(setIsAuthenticated(true))
            context.openPopup('welcome')
        } else {
            context.openPopup('incorrect')
        }
        setTimeout(function() {
            setLoading(false)
        }, 10000)
        setisValid(false);
    }

    const registerUser = async (event, name, mail, tel,usuario, pass) =>{
        setLoading(true);
        const input = {
            name: name,
            mail: mail,
            cell: tel,
            user: usuario,
            password: pass
        }
        let response = await http.post("user/register", input).catch(error => {
            setLoading(false)
            context.openPopup('internet')
        })
        const { message, result, success } = response.data;
        if (success == true) {
            //Poner popup de informacion y un loop de carga
            navigate("/Home");
            AuthenticationDispatch(setIsAuthenticated(true))
            context.openPopup('register')
        } else {
            context.openPopup('internet')
        }
        setisValid(false);
        setLoading(false);
    }

    const CloseSession = () =>{
        AuthenticationDispatch(setIsAuthenticated(false))
    }


    return { validateLogin, CloseSession, registerUser, isValid, validationMessage }
}
export default useLogin;
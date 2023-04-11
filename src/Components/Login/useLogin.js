//libs
import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
//action
import { useLoading } from "../../hooks/useLoading";
import { useDispatch } from 'react-redux';
import {setIsAuthenticated }from '../../Redux/generalStateSlice'
import http from '../../services/httpAxios';

const useLogin = () => {
    const navigate = useNavigate();
    const context = useOutletContext()
    const AuthenticationDispatch = useDispatch()
    const { setLoading } = useLoading()
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [isValid, setisValid] = useState(true);
    const [validationMessage, setvalidationMessage] = useState("");
    const [trackId, setTrackId] = useState();

    useEffect(() => {
        setLoading(false)
    }, []);
    const getId = (event) => {

    }

    const validateLogin = async (event, usuario, pass) => {
        setLoading(true);
        const input = {
            user: usuario,
            password: pass
        }
        let response = await http.post("user/login", input).catch(error => {
            setLoading(false)
            context.openPopupWithMessage('Lo sentimos su solicitud no ha podido ser procesada')
        })
        const { message, result, success } = response.data;
        if (success == true) {
            navigate("/Home");
            AuthenticationDispatch(setIsAuthenticated(true))
            console.log("Ha iniciado sesion correctamente")
        } else {
            console.log("Clave o usuario incorrectos")
        }
        setisValid(false);
        setLoading(false);
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
            context.openPopupWithMessage('Lo sentimos su solicitud no ha podido ser procesada')
        })
        const { message, result, success } = response.data;
        if (success == true) {
            //Poner popup de informacion y un loop de carga
            navigate("/Home");
            AuthenticationDispatch(setIsAuthenticated(true))
            console.log("Ha iniciado sesion correctamente")
        } else {
            console.log("Clave o usuario incorrectos")
        }
        setisValid(false);
        setLoading(false);
    }

    const CloseSession = () =>{
        AuthenticationDispatch(setIsAuthenticated(false))
    }


    return { validateLogin, getId, CloseSession, registerUser, password, user, isValid, validationMessage }
}
export default useLogin;
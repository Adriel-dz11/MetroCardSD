import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";

//redux
import { popUpToggle } from "../../Redux/generalStateSlice";
import { useLoading } from "../../hooks/useLoading";
import mapmetro from '../../Assets/Img/map.png'

export const UsePopUp = () => {
    const isOpen = useSelector((state) => state.generalState.isOpen);

    //LocalStates
    const popUpBody = useSelector((state) => state.generalState.popUpBody);
    const [body, setbody] = useState();
    const [message, setMessage] = useState("");
    const { setLoading } = useLoading();
    const popUpToggleDispatch = useDispatch();

    useEffect(() => {
        switch (popUpBody) {
            case 'addnew':
                setbody(
                    <form class="mx-auto flex justify-center items-center flex-wrap space-y-4">
                        <h1 class="">Añade una nueva Tarjeta!</h1>
                        <input type="text" name="CardID" placeholder="Ingresa el Codigo unico de tu tarjeta" class="border[#181C32] mx-auto h-[34px] w-[235px] rounded-[20px] border-2 pl-4" />
                        <input type="submit" value="Enviar" class="font-jaldi-Bold w-[150px] justify-center rounded-[20px] bg-black py-1 text-white md:h-[35.38px]" />
                    </form>)
                break;
            case 'welcome':
                setbody(
                    <h1>Bienvenido al Sistema!

                    </h1>)
                break;
            case 'incorrect':
                setbody(
                    <h1>Contraseña o usuario incorrecto </h1>)
                break;
            case 'internet':
                setbody(
                    <h1>La solicitud no ha podido ser procesada, revise su conexion</h1>)
                break;
            case 'register':
            setbody(
                <h1>Se ha registrado correctamente!</h1>)
            break;
            case 'deletecard':
                setbody(
                    <form class="mx-auto flex justify-center items-center flex-wrap space-y-4">
                        <h1 class="">Estas seguro que deseas eliminar la tarjeta?</h1>
                        <input type="text" name="CardID" placeholder="Ingresa el Codigo unico de tu tarjeta" class="border[#181C32] mx-auto h-[34px] w-[235px] rounded-[20px] border-2 pl-4" />
                        <input type="submit" value="Enviar" class="w-[150px] justify-center rounded-[20px] bg-black py-1 text-white md:h-[35.38px]" />
                    </form>)
                break;

            default: setbody(<p className="my-0 mx-4 text-center text-base">Hola</p>)
        }
    }, [popUpBody, message])

    const closePopup = () => {
        popUpToggleDispatch(popUpToggle());
    };

    const openPopup = (context) => {
        popUpToggleDispatch(popUpToggle(context));
    };


    return { mapmetro, isOpen, body, closePopup, openPopup }
}
export default UsePopUp;

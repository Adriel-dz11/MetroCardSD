import { useEffect, useRef } from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import UsePopUp from "../Popup/usePopup";


const UseLayout = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {headerImg,openPopup,openPopupWithMessage,isOpen,body,closePopup} = UsePopUp()
    const effectRan = useRef(false);

    useEffect(()=>{
      if (effectRan.current === false) {

            let from = "/"
            if(location.pathname === '/'){
              navigate("/notfound",{state:{from}})
            }
        }
        return () => {
          effectRan.current = true;
      }
    },[location,navigate])
    
   return{headerImg,openPopup,openPopupWithMessage,isOpen,body,closePopup}
    
}

export default UseLayout;

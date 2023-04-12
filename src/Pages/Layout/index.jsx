import { Outlet } from "react-router-dom";
import UseLayout from "../../components/Layout/UseLayout";
//component 
import PopUp from "../../components/PopUp";
import Splash from "../../components/Splash";


const Layout = () => {
    const { headerImg, openPopup, openPopupWithMessage, isOpen, body, closePopup } = UseLayout()

    return (
        <>
            <Splash />
            <PopUp headerImg={headerImg} isOpen={isOpen} body={body} closePopup={closePopup} />
            <Outlet context={{ openPopup, openPopupWithMessage, closePopup }} />
        </>
    )
};

export default Layout;
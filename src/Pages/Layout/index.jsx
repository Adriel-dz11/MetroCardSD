import { Outlet } from "react-router-dom";
import UseLayout from "../../Components/Layout/UseLayout";
import { useDispatch, useSelector } from "react-redux";
//component 
import PopUp from "../../Components/Popup/index";
import Splash from "../../Components/Splash/index";


const Layout = () => {
    const { headerImg, openPopup, openPopupWithMessage, isOpen, body, closePopup } = UseLayout()

    const isAuthenticated = useSelector(state => state.generalState.isAuthenticated);
    return (
        <div>
            <Splash />
            <PopUp headerImg={headerImg} isOpen={isOpen} body={body} closePopup={closePopup} />
            <Outlet context={{ openPopup, openPopupWithMessage, closePopup }} />
        </div>
    )
};

export default Layout;
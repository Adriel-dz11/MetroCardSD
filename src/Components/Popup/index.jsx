import { useSelector } from "react-redux";
import logopeq from '../../Assets/Img/logopeq.png'

const PopUp = ({ headerImg, isOpen, body, closePopup }) => {

  const isAuthenticated = useSelector(state => state.generalState.isAuthenticated);

  return (
    <>
      {isAuthenticated ? 
      <div className={isOpen ? "ml-[-360px] mt-[-120px] bg-black bg-opacity-50 fixed z-[200] w-screen h-screen micro:screen xxs:fixed micro:pt-[20px] xxs:pt-[20px] flex justify-center items-center sm:absolute" : "hidden"}>
        <div className="bg-white w-[85%] h-auto rounded-[29px] flex items-center flex-col gap-3 md:w-[343px] md:min-h-[226px] md:rounded-[29px] md:borde-[solid] md:border-[1px] md:border-[#D9D9D9] ">
          <img className=" w-1/4 h-1/4 mt-6 md-1 micro:hidden" src={logopeq} alt="logo popUp"></img>
          <div className="gap-4 md:mt-1 micro:gap-1 micro:mt-3">
            {body}
          </div>
          <div className="w-full flex justify-center pb-6 micro:pb-2">
            <button className="bg-black font-jaldi-Bold text-white w-[150px] py-1 md:h-[41.38px] rounded-[20px] " onClick={closePopup}>Cerrar</button>
          </div>

        </div>
      </div> 
      : 
      <div className={isOpen ? "bg-black bg-opacity-50 fixed z-[200] w-screen h-screen micro:screen xxs:fixed micro:pt-[20px] xxs:pt-[20px] flex justify-center items-center sm:absolute" : "hidden"}>
        <div className="bg-white w-[85%] h-auto rounded-[29px] flex items-center flex-col gap-3 md:w-[343px] md:min-h-[226px] md:rounded-[29px] md:borde-[solid] md:border-[1px] md:border-[#D9D9D9] ">
          <img className=" w-1/4 h-1/4 mt-6 md-1 micro:hidden" src={logopeq} alt="logo popUp"></img>
          <div className="gap-4 md:mt-1 micro:gap-1 micro:mt-3">
            {body}
          </div>
          <div className="w-full flex justify-center pb-6 micro:pb-2">
            <button className="bg-black font-jaldi-Bold text-white w-[150px] py-1 md:h-[41.38px] rounded-[20px] " onClick={closePopup}>Cerrar</button>
          </div>

        </div>
      </div>}

    </>
  );
};

export default PopUp;

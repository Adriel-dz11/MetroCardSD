import { useSelector } from "react-redux";

import logopeq from '../../Assets/Img/logopeq.png'

const Splash = () => {
    const isVisible = useSelector(state => state.generalState.loading)
    const isAuthenticated = useSelector(state => state.generalState.isAuthenticated);

    return (
        <div className={isAuthenticated ? "ml-[-360px]" : ""}>
            <div className={isVisible ? 'absolute w-full bg-black h-full micro:h-screen micro:fixed z-[300] mb-16 animate-cover opacity-80' : 'absolute micro:h-screen micro:fixed w-full h-full z-[300] animate-coverReverse'}>
                <div className={isVisible ? 'flex flex-col w-full h-full justify-center items-center animate-hiddenReverse' : 'flex flex-col w-full h-full justify-center items-center animate-hidden'}>
                    <img src={logopeq} className='w-1/5 ' alt="logo" />
                    <img src={logopeq} className='w-9 animate-spin mt-20' alt="logo" />
                </div>
            </div>
        </div>
    );
}

export default Splash;
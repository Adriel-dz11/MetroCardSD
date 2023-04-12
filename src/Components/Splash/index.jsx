import { useSelector } from "react-redux";
 
const Splash = () => {
    const logo = useSelector(state => state.generalState.resourcesApp.frontResources.imgUri.ademiFullLogo)
    const spiner = useSelector(state => state.generalState.resourcesApp.frontResources.imgUri.spiner)
    const isVisible = useSelector(state => state.generalState.loading)

 
    return (
        <div className={isVisible ? 'absolute w-full bg-ademi-color-green h-full micro:h-screen micro:fixed z-[300] mb-16 animate-cover md:rounded-[43px]' :'absolute micro:h-screen micro:fixed w-full bg-ademi-color-green h-full z-[300] animate-coverReverse md:rounded-[43px]' }>
            <div className={isVisible ? 'flex flex-col w-full h-full justify-center items-center animate-hiddenReverse':'flex flex-col w-full h-full justify-center items-center animate-hidden' }>
                <img src={logo} className='w-3/5 ' alt="logo" />
                <img src={spiner} className='w-9 animate-spin' alt="logo" />
            </div>             
        </div>
    );
}

export default Splash;
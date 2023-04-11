
//libs
import { useDispatch } from 'react-redux'
//action
import { loadingHandler } from '../Redux/generalStateSlice';

export function useLoading (){
    const loadingDispatch = useDispatch()

    const setLoading = (value)=>{
        loadingDispatch(loadingHandler(value))
    }
        
    return{setLoading}
}


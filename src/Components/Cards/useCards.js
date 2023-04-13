//libs
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
//action
import { useLoading } from "../../hooks/useLoading";
import { useDispatch,  useSelector} from 'react-redux';
import http from '../../services/httpAxios';

const useCard = () => {
    //LocalState
    const [isUpdating, setisUpdating] = useState(false);
    
    const { setLoading } = useLoading()
    const navigate = useNavigate()
    const popUpToggle = useDispatch()
    const context = useOutletContext()
    
  const authToken = useSelector(state => state.generalState.authToken);


    //Refs
    const effectRan = useRef(false);
    const [metroCards, setMetroCards] = useState([])

    useEffect(() => {
        if (effectRan.current === false) {
            const getCardList = async () => {
                setLoading(true)
                const { data } = await http.get("api/InternalCards/GetByUser/id?id=3", { headers: {"Authorization" : `Bearer ${authToken}`}})
                .then(res=>{
                    setMetroCards(res.data.listCards)
                    console.log(res.data.listCards)
                })
                .catch(e => {
                    setLoading(false)
                    context.openPopupWithMessage('Lo sentimos, su solicitud no ha podido ser procesada')
                });
            }
            getCardList();
            return () => {
                setLoading(false)
                effectRan.current = true;
            }
        }


    }, [])

    const editCard = async (event, CardID) => {
        const input = {
            cardID: CardID,
            amount: 20,
            travels: 2000,
            isValid: false,
            users: 3
          }
        setLoading(true);
        let response = await http.post("user/login", input ).catch(error => {
            setLoading(false)
            context.openPopup('help')
        })
    }

    const AddNew = async (e) =>{
        context.openPopup('addnew')
    }


    return { 
        isUpdating,
        metroCards,
        AddNew
     }
}
export default useCard;
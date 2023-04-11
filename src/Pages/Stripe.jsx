import React from 'react'
import {loadStripe} from '@stripe/stripe-js'
import{Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import "bootswatch/dist/lux/bootstrap.min.css"
import axios from 'axios';

//Promesa con la API Key pública
const stripePromise = loadStripe("pk_test_51MupeTGQwZvL7vthHPCjWd9jkFxAgh5bEpzkz13M3Ch76AEbPuOWaGDaWEpkKfkkWnve7eOseZojr4oG7YHQzQ2w00RjFV5jSt")

//funcion para crear el formulario de checkout
const CheckoutForm = () => {
    //el stripe como tal
   const conexionStripe = useStripe();
   //los elementos del stripe
   const elements = useElements();

 //tira un mensaje con el PaymentMethod
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const {error, paymentMethod} = await conexionStripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)

        });
        if (!error) {
          console.log(paymentMethod);  
          const { id } = paymentMethod;
          const body = { 
            id: 1, 
            amount: 2000

         };
          const {data} = await axios.post("https://localhost:7028/api/ExternalCards/process-payment", body
          ).then(res => console.log('Posting data', res)).catch(err => console.log(err))
          
          console.log(data);
          elements.getElement(CardElement).clear();


        }
       };


    return (
    <form onSubmit={handleSubmit} className="card card-body">
    
        <img src="https://pbs.twimg.com/media/EGCnCMeX0AAWHBa.jpg:large" alt="precios de tarjeta recargable" className="img-fluid" />
        
        <div className="form-group">
        <label className="text-left">Cantidad de viajes:  </label><br></br>
        <input className="border-style dashed" type="number" ></input><br></br>

        <CardElement className="form-control my-2"/>
        </div>
    
        <button className="btn btn-success">Recargar</button>
    </form>
    )
}



//función para consumir API de Ejemplo ''' todo podría estar comentado si quisiese
function ConsumirAPI(){
    //consumiendo las APIs de ejemplo
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const [todos, setTodos] = useState()
  const fetchApi = async() => {
  const response = await fetch (url)
  console.log(response.status)
  const responseJSON = await response.json()
  setTodos(responseJSON)
  
  }
  useEffect(() =>{
  fetchApi()
  },[])
  return (
    <div className="App">
    <ul>
      {!todos ? 'Cargando...' : 
      todos.map( (todo, index)=>{
        return <li>{todo.id} {todo.title} </li>
      })
      }
    </ul>
    </div>
  )
  }



//Creando el componente que será llamado en App.js, despliega el formulario de checkout
export const Stripe = () => {
    return (
        <Elements stripe={stripePromise}>
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                    <CheckoutForm/>
                    </div>
                </div>
            </div>
        
    </Elements>
    )
  }
  

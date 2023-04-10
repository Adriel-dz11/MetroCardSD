import React from 'react'
import {loadStripe} from '@stripe/stripe-js'
import{Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import "bootswatch/dist/lux/bootstrap.min.css";

const stripePromise = loadStripe("pk_test_51MupeTGQwZvL7vthHPCjWd9jkFxAgh5bEpzkz13M3Ch76AEbPuOWaGDaWEpkKfkkWnve7eOseZojr4oG7YHQzQ2w00RjFV5jSt")

//funcion para 



//Formulario
const CheckoutForm = () => {
    //el stripe como tal
   const conexionStripe = useStripe();
   //los elementos del stripe
   const elements = useElements();

    //tira un mensaje
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const {error, paymentMethod} = await conexionStripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)

        });
        if (!error){
          console.log(paymentMethod);  
        }
       };


return <form onSubmit={handleSubmit} className="card card-body">
    
    <img src="https://pbs.twimg.com/media/EGCnCMeX0AAWHBa.jpg:large" alt="precios de tarjeta recargable" className="img-fluid" />
    <div className="form-group">
    <CardElement className="form-control"/>
    </div>
    
    <button className="btn btn-success"> 
       Recargar
    </button>
</form>
}

//llamando al componente
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
  

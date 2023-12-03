import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

import { useEffect } from "react";
// import useCart from "../../../hooks/useCart";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import useAxiosSecure from "../../hooks/useAuth/useAxiosSecure";

const CheckoutForm = ({totalPrice, plan}) => {
    console.log(totalPrice, plan);
    const navigate = useNavigate()
    const {user} = useAuth();
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const[error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    
    // const [cart, refetch] = useCart();
    // const totalPrice = cart.reduce((total, item)=>total + item.price, 0)
    // const totalPrice=10; //for example

    useEffect(()=>{
       if(totalPrice>0){
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
       }
    },[axiosSecure, totalPrice])


    const handleSubmit = async(e)=>{
        e.preventDefault();

        if(!stripe || !elements){
            return 
        }

        const card = elements.getElement(CardElement)

        if(card===null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
          });
        if(error){
            console.log('payment error', error);
            setError(error.message)
        }
        else{
            console.log('payment method', paymentMethod);
            setError('')
        }
        //confirm payment 
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'anonymous'
                }
            }
        }) 
        if(confirmError){
            console.log('confirm error');
        }
        else{
            console.log('payment intent:', paymentIntent);
            if(paymentIntent.status==='succeeded'){
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database 
                const payment = {
                    // transactionId: paymentIntent.id,
                    // email: user.email,
                    // plan,
                    plan: plan
                }
//start
axiosSecure.patch(`/users/${user.email}`, payment)
.then(res => {
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
        // refetch();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: 'Successful',
            showConfirmButton: false,
            timer: 1500
        });

    }
})
//end
                const res = await axiosSecure.post('/payments', payment)
                console.log('payment saved', res.data);
                // refetch();
                console.log('this is res.data: ', res.data, 'this is res.data.paymentResult.insertedId: ', res.data?.paymentResult?.insertedId);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank you for paying",
                    showConfirmButton: false,
                    timer: 1500
                  });
                //   navigate('/dashboard/paymentHistory')
                if(res.data?.paymentResult?.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for paying",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   navigate('/dashboard/paymentHistory')
                }

            }
        }


    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-primary" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && <p className="text-green-600">Your transaction id: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = ({price, plan}) => {
   const totalPrice = price;
   console.log(totalPrice,plan);
    console.log(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div>
            <h3>This is payment page</h3>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm totalPrice={totalPrice} plan={plan}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
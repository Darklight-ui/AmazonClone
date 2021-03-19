import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';


function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisable] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate special client secret which allows us to charge a client,

        const getClientSecret = async () => {
            const response = await axios({
                method: 'POST',
                //stripe expect the total in a currencies subuints
                url:`/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {

        event.preventDefault();
        setProcessing(true);

            const payload = stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }).then(({ PaymentIntent }) => {
                
                //paymentIntent = payment Confirmation
    
                setSucceeded(true);
                setError(null);
                setProcessing(false);
    
                history.replace('/orders')
            })
        //const payload = await stripe 
    }

    const handleChange = event => {
        //Listen to change in the CardElement
        //and display the error as the customer type in thier details...
        setDisable(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment_container">
                            <h1>Checkout ( {
                        <Link to="/checkout">{basket?.length} items</Link> } )</h1>
                {/*Payment section - Delivery section */}
                    <div className="payment_section">
                        <div className="payment_title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment_address">
                            <p>{user?.email}</p>
                            <p>123 React addres</p>
                            <p>Nigeria Abuja</p>
                        </div>
                    </div>

                {/*Payment section - Review section */}

                    <div className="payment_section">
                    <div className="payment_title">
        	                <h3>Review items and delivery</h3>
                      </div>
                      <div className="payment_items">
                          {/*Product from basket */}
                          {basket.map(item => (
                             <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                />
                          ))}
                      </div>
                    </div>

                {/*Payment section - Payment section */}
                    <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/*strip magic will go here */}

                        <form onSubmit={handleSubmit}>
                            <CardElement  onChange={handleChange}/>
                            <div className="payment_priceContainer">
                                        <CurrencyFormat 
                        renderText={(value) => (
                               <h3>Order total: {value}</h3>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"£"}
                        />
                        <button disabled={processing || disabled || succeeded}>
                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                        </button>
                            </div>
                            {/*error*/}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Payment

import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
    const [ { basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://ng.jumia.is/cms/Homepage/2020/W40/Jumia-prime-strip.gif" alt="no" />
                
            <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout_title">
                Your Shopping Basket
                
                {basket.map(item => (
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
            ))}
                
                {/*BasketItems*/}
                {/*BasketItems*/}
                {/*BasketItems*/}
            </h2>
         </div>
        </div>
        
        <div className="checkout_right">
            {/*Subtotal*/}
            <Subtotal />
        </div>
        </div>
    )
}

export default Checkout

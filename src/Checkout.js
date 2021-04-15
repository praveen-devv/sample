import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket,user},dispatch] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://retailanalysis.igd.com/Portals/1/Images/News/Content/prime%20day%20banner.jpg?w=auto"></img>
                <div>
                    <h3>Hello {user?.email}</h3>
                    <h2 className="checkout_title">Your Cart</h2>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            rate={item.rate}
                            rating={item.rating}
                        />
                    ))}
                    
                </div>
            </div>
            <diV className="checkout_right">
                <Subtotal />
            </diV>
        </div>
        
    )
}

export default Checkout

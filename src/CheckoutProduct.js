import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({id,title,image,rate,rating,hideButton}) {

    const [{basket},dispatch] = useStateValue()

    const removeFromCart = () =>{
        dispatch({
            type:'REMOVE_FROM_CART',
            id:id,
        })

    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image}  />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>Rs</small>
                    <strong>{rate}</strong>
                </p>
                <div className="CheckoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_,i)=>(
                            <p>⭐</p>
                        ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromCart}>Remove from cart</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct


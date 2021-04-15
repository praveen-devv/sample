import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({id,title,image,rate,rating}) {

    const [{basket},dispatch] = useStateValue()

    const addToCart =() =>{
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id:id,
                title:title,
                image:image,
                rate:rate,
                rating:rating,
            },
        });

    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>Rs.</small>
                    <strong>{rate}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_,i)=>(
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img src={image}></img>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product

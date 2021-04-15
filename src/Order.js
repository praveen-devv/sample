import React from 'react'
import moment from 'moment'
import CurrencyFormat from 'react-currency-format'
import CheckoutProduct from './CheckoutProduct'
import './Order.css'

function Order() {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(Order.data.created).format("MMMMM Do YYYY,h:mma")}</p>
            <p className="order_id">
                <small>{Order.id}</small>
            </p>
            {Order.data.basket?.map(item => (
                <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    rate={item.rate}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat 
                renderText={(value) =>(
                   <h3 className="order_total">Order Total:{value}</h3>
                )}
                
                decimalScale={2}
                value={Order.data.amount /100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs"}
            />

        </div>
    )
}

export default Order 

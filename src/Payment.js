import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'
import { Link , useHistory } from 'react-router-dom';
import { CardElement , useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
 import {db} from './firebase'

function Payment() {

    const [{basket,user} , dispatch] = useStateValue();

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')
    const [clientSecret, setClientSecret] = useState(true)
    const history = useHistory()


    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const getClientSecret = async () =>{
            const response = await axios({
                method:'post',
                url: `/payments/create?total=${getBasketTotal(basket)}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    console.log('the secret is',clientSecret)

    const handleSubmit = async(e) => {
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret ,{
            payment_method :{
                card : elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount : paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })
            
            history.replace('/orders')
        })
    }

    const handleChange = e => {

        setDisabled(e.empty)
        setError(e.error ? e.error.message : '')

    }

    return (
        <div className="payment">

            <div className="payment_container">
                <h1>
                    Checkout {<Link to="/checkout">{basket?.length} items</Link>}
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>12,Anna Salai</p>
                        <p>Chennai-28</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
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
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details" >
                         <form onSubmit={handleSubmit}>
                             <CardElement onChange={handleChange}/>
                             <div className="payment_priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) =>(
                                        <>
                                            <p>
                                                <h3>Order Total:{value}</h3>
                                            </p>
                                        </>
                                        
                                    )}
                                    
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"Rs"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                             </div>
                             {error && <div>{error}</div>}
                         </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment

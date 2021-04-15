import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import React , { useEffect } from 'react';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js'
import{Elements} from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise = loadStripe('pk_test_51IGOJiAD3w3RAdaviyvMzM1GHq05qrV0eWgwVFc6yDJxOlInoo4J0zOXiaN5YnRnVoT7oXK8RaNajkv6tvAYpdns00iw5cNQgh');

function App() {
  
  const [{} , dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the useris ',authUser)
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })

      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
    })
    
  }, [])

  return (
    <Router>
      <div className="App"> 
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header /> 
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>    
      </div>
    </Router>
  );
}

export default App;

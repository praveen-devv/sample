import React, { useState } from 'react'
import './Login.css'
import logo from './logoo.png'
import {Link , useHistory} from 'react-router-dom'
import {auth} from './firebase'

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))

    }

    const register = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) =>{
                console.log(auth)
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))


    }

    return (
        <div className="login">
            <Link to='/'>
                <img 
                    className="login_logo"
                    src={logo}
                />
            </Link>
           
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button className="login_signInButton" type="submit" onClick={signIn}>Sign In</button>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                    <button className="login_registerButton" onClick={register}>Create your Amazon account</button>
                </form>

            </div>
        </div>
    )
}

export default Login

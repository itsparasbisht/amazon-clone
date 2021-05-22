import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import './Login.css'

function Login() {
    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const createUser = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/' className="login__logo">
                <img className="header__logo" src="header/amazon-logo.png" alt="amazon logo" />
            </Link>
            <form autoComplete="off">
                <h1>Sign in</h1>

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />

                <button className="login__form-btn1" onClick={signIn}>Sign In</button>

                <p>
                By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice.
                </p>

                <button className="login__form-btn2" onClick={createUser}>Create your Amazon account</button>
            </form>
        </div>
    )
}

export default Login

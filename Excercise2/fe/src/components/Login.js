import { Button } from '@mui/material'
import React from 'react'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'
import "./Login.css"
import {auth, provider} from '../firebase'

const Login = () => {
    const [{}, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => alert(error.message))
    }
  return (
    <div className='login'>
        <div className='login__container'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png' alt='whatsapp'/>
            <div className='login__text'>
                <h1>Sign in to Messaging App</h1>
            </div>
            <Button onClick={signIn}>Sign In with Google</Button>
        </div>
    </div>
  )
}

export default Login
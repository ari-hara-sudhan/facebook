import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'
function Login() {
    const [{},dispatch]=useStateValue()
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>
      
{
    dispatch({
        type:actionTypes.SET_USER,
        user:result.user,
    })

    
})
      
        .catch((error)=>alert(error.message))

    }
    return (
        <div className="login">
           <div className="login__container">
               <img className="login__logo" src="https://1000logos.net/wp-content/uploads/2016/11/fb-logo.jpg" alt="whts" />
               <div className="login__text">
                   <h3>Sign In to Facebook</h3>
               </div>
               <Button className="login__button" onClick={signIn}>Sign In With Google</Button>


           </div>
            
        </div>
    )
}

export default Login
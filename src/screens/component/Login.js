import React from 'react'
import {auth, provider} from '../../firebase';

import "../../styles/Login.css"

function Login() {
    const signIn = () => {
        // Auth for Google Login
        auth.signInWithPopup(provider).catch((err) => alert(err.message))
    }
    return (
        <div className='login' >
            <div className="login__logo">
                <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" height="150px" alt="discord logo" />
            </div>
            <button type="button" onClick={signIn} class="btn btn-primary">Sign IN</button>
           
        </div>
    )
}

export default Login

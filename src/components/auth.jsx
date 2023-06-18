import { useState } from 'react'
import { auth } from "../config/firebase.config"
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const Auth = () => {
    
    const [email, setEmail] = useState('');
    const [passport, setPassport] = useState('');

    const signIn = () => {
        createUserWithEmailAndPassword(auth, email, passport)
    }

    return(
        <div>
            <input type="email" name="email" placeholder="Email" onInput={(e) => {setEmail(e.target.value)}} />
            <br />
            <input type="password" name="password" placeholder="Password" onInput={(e) => {setPassport(e.target.value)}} />
            <br />
            <button onClick={signIn}>SignIn</button>
        </div>
    )
}
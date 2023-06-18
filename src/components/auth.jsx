import { useState } from 'react'
import { auth, googleProvider } from "../config/firebase.config"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'


export const Auth = () => {
    
    const [email, setEmail] = useState('');
    const [passport, setPassport] = useState('');

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, passport)
        } catch (error) {
            console.log(error, ' - error in signIn method');
        }
    }

    const googleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (error) {
            console.log(error, ' - error in googleSignIn method');
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.log(error, ' - error in logOut method');
        }
    }

    console.log(auth?.currentUser?.email);

    return(
        <div>
            <input type="email" name="email" placeholder="Email" onInput={(e) => {setEmail(e.target.value)}} />
            <br />
            <input type="password" name="password" placeholder="Password" onInput={(e) => {setPassport(e.target.value)}} />
            <br />
            <button onClick={signIn}>SignIn</button>
            <br />
            <br />
            <button onClick={googleSignIn}>Google signIN</button>
            <br />
            <br />
            <button onClick={logOut}>logOut</button>
        </div>
    )
} 
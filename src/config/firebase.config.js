import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDPhfitIY_yFZ-iTfWUavBw2KbzlIxko7Y",
    authDomain: "flowershop-ec359.firebaseapp.com",
    projectId: "flowershop-ec359",
    storageBucket: "flowershop-ec359.appspot.com",
    messagingSenderId: "589962324674",
    appId: "1:589962324674:web:88d10d9381f30bbb1be95b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
import React from "react";
import {firebaseConfig} from './config'
import firebase from 'firebase';

const Register = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const auth = firebase.auth()

    const SignInWithGoogle = async () => {
            const googleProvider = new firebase.auth.GoogleAuthProvider()
            await auth.signInWithPopup(googleProvider)
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        await SignInWithGoogle()
    }

    return (
            <div className="row register">
                    <a onClick={submitHandler} className="waves-effect waves-light btn">Sign in with Google</a>
            </div>
    )
}

export default Register
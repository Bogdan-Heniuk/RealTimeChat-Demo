import React from "react";
import firebase from 'firebase';
import {auth} from "../../config";

const Register = () => {

    const SignInWithGoogle = async () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider()
        await auth.signInWithPopup(googleProvider)
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        await SignInWithGoogle()
    }

    return (
        <div className='row register'>
            <div onClick={submitHandler} className="google-btn">
                <div className="google-icon-wrapper">
                    <img className="google-icon"
                         src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <p className="btn-text"><b>Sign in with google</b></p>
            </div>
        </div>
    )
}

export default Register
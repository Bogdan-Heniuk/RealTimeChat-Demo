import React from "react";
import message from "../store/messages";
import useInputValue from "../hooks/use-input-value";
import {auth} from "./config";

const InputField = () => {

    const input = useInputValue()

    const submitHandler = async (event) =>{
        event.preventDefault()
        await message.addMessage({
            user_id : auth.currentUser.uid,
            id: Date.now(),
            title: input.value()
        })
        input.clear()
    }
    return (
            <div className="input-field flex">
                <input {...input.bind} className="validate"/>
                <div className="send-button">
                    <a onClick={submitHandler} className="btn-floating btn-large red">
                        send
                    </a>
                </div>
            </div>
    )
}

export default InputField
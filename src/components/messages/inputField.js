import React from "react";
import message from "../../store/messages";
import useInputValue from "../../hooks/use-input-value";
import {userStore} from "../../store/user";
import {observer} from "mobx-react-lite";

const InputField = observer(() => {
    const input = useInputValue('', {onEnter : submitHandler})
    const disabled = !!!input.value().trim().length

    async function submitHandler(){
        if(disabled) return
        await message.addMessage({
            user_id : userStore.user.uid,
            id: Date.now(),
            title: input.value(),
            avatar: userStore.user.providerData[0].photoURL
        })
        input.clear()
    }
    return (
            <div className="input-field flex">
                <input {...input.bind} className="validate" />
                <div className="send-button">
                    <button disabled={disabled} onClick={submitHandler} className="btn-floating btn-large red">
                        <i style={{marginLeft: '2.5px'}} className="large material-icons">send</i>
                    </button>
                </div>
            </div>
    )
})

export default InputField
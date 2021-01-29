import React, {useEffect} from "react";
import Messages from "./messages";
import InputField from "./inputField";
import messagesStore from '../store/messages'

const ChatContent = () => {
    useEffect(() => {
        messagesStore.subscribeToMessages()
    })
    return (
        <>
            <div className="row content">
                <div className="col s12">
                    <Messages/>
                </div>
            </div>
            <div className="row input">
                <div className="col s12">
                    <InputField/>
                </div>
            </div>
        </>
    )
}

export default ChatContent
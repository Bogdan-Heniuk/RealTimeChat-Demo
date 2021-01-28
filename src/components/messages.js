import React, {useEffect} from "react";
import Message from "./message";
import messageStore from "../store/messages";
import {observer} from "mobx-react-lite";

const Messages = observer(() => {

    return (
        <div className='messages'>
            {messageStore.messages.map(element => <Message data = {element} key={element.id}/>)}
        </div>

    )
})

export default Messages
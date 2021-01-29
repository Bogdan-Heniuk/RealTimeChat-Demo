import React from "react";
import Message from "./message";
import messageStore from "../../store/messages";
import {observer} from "mobx-react-lite";
import AlwaysScrollToBottom from "../common/scroll";

const Messages = observer(() => {
    return (
        <div className='messages'>
            {messageStore.messages.map(element => <Message data = {element} key={element.id}/>)}
            <AlwaysScrollToBottom/>
        </div>

    )
})

export default Messages
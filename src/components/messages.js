import React from "react";
import Message from "./message";



const Messages = () => {
    const messages = [
        {
            user_id : 2,
            id: 0,
            name: 'loh',
            text: 'hello'
        },
        {
            user_id : 3,
            id: 1,
            name: "not loh",
            text: 'fuck'
        },  {
            user_id : 3,
            id: 1,
            name: "not loh",
            text: 'fuck'
        },  {
            user_id : 3,
            id: 1,
            name: "not loh",
            text: 'fuck'
        },  {
            user_id : 3,
            id: 1,
            name: "not loh",
            text: 'fuck'
        },  {
            user_id : 2,
            id: 1,
            name: "not loh",
            text: 'fuck'
        },
        {
            user_id : 2,
            id: 1,
            name: "not loh",
            text: 'fuck'
        },
        {
            user_id : 2,
            id: 1,
            name: "not loh",
            text: 'fuck'
        },
        {
            user_id : 2,
            id: 1,
            name: "not loh",
            text: 'fuck'
        },

    ]
    return (
        <div className='messages'>
            {messages.map(element => <Message data = {element} key={element.id}/>)}
        </div>

    )
}

export default Messages
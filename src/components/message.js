import React from "react";
import {auth} from "./config";

const Message = (data) => {

    console.log(auth.currentUser.providerData);

    return (
        <div style={{
            flexDirection : auth.currentUser.uid === data.data.user_id ? 'row-reverse' : 'row',
        }} className='message flex'>
            <div className="name">
                lo
            </div>
            <div className="text">
                {data.data.title}
            </div>
        </div>
    )
}

export default Message
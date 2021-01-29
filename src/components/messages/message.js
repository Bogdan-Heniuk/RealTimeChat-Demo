import React from "react";
import {userStore} from "../../store/user";
import {observer} from "mobx-react-lite";

const Message = observer ((props) => {

    return (
        <div style={{
            flexDirection : userStore.user.uid === props.data.user_id ? 'row-reverse' : 'row',
        }} className='message flex'>
            <div >
                <img referrerPolicy="no-referrer" className="avatar" src={props.data.avatar} alt=""/>
            </div>
            <div className="text">
                {props.data.title}
            </div>
        </div>
    )
})

export default Message
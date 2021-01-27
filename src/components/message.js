import React from "react";


const Message = (data) => {
    const my_id = 2;
    return (
        <div style={{
            justifyContent: my_id === data.data.user_id ? 'flex-end' : 'flex-start'
        }} className='message flex'>
            <div className="name">
                {data.data.name.slice(0,2)}
            </div>
            <div className="text">
                {data.data.text}
            </div>
        </div>
    )
}

export default Message
import React from "react";

const InputField = () => {
    return (
            <div className="input-field flex">
                <input className="validate"/>
                <div className="send-button">
                    <a className="btn-floating btn-large red">
                        send
                    </a>
                </div>
            </div>
    )
}

export default InputField
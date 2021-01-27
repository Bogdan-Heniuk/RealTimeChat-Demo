import Navbar from "./components/navbar";
import './css/App.css'
import InputField from "./components/inputField";
import React from "react";
import Messages from "./components/messages";

function App() {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
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
            </div>
    )
}

export default App;

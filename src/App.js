import Navbar from "./components/navbar";
import './css/App.css'
import React from "react";
import Register from "./components/register";
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import ChatContent from "./components/chatContent";

const App = () => {

    return (
        <Router>
            <div className="app">
                <div className="navbar">
                    <Navbar/>
                </div>
                <Switch>
                    <Route path='/' exact component={ChatContent}/>
                    <Route path='/register' exact component={Register}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;

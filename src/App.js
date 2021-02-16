import Navbar from "./components/navbar";
import './css/App.css'
import React, {useEffect} from "react";
import Register from "./components/register/register";
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import ChatContent from "./components/messages/chatContent";
import PublicRoute from "./components/common/publicRoute";
import PrivateRoute from "./components/common/privateRoute";
import FallbackRoute from "./components/common/fallbackRoute";
import {userStore} from './store/user'
import {observer} from "mobx-react-lite";

const App = observer(() => {

    useEffect(() => {
        userStore.subscribeToAuthStateChanged()
    }, [])

    if(!userStore.isInitialized){
        return null
    }

    return (
        <Router>
            <div className="app">
                <div className="navbar">
                    <Navbar/>
                </div>
                <Switch>
                    <PrivateRoute path='/chat' exact component={ChatContent}/>
                    <PublicRoute path='/register' exact component={Register}/>
                    <Route path='*' component={FallbackRoute}/>
                </Switch>
            </div>
        </Router>
    )
})

export default App;

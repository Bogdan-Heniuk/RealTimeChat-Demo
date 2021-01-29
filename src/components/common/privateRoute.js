import React from "react";
import {Route, Redirect} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import {userStore} from "../../store/user";

const PrivateRoute = observer(( {component: Component, ...rest}) => {
    const user = userStore.user

    return (
        <Route {...rest} render={props => (
            user ?
                <Component {...props} />
                : <Redirect to="/register" />
        )} />
    );
});

export default PrivateRoute
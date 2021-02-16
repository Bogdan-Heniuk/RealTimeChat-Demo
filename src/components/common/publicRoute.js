import React from "react";
import {Route, Redirect} from 'react-router-dom'
import {userStore} from "../../store/user";
import {observer} from "mobx-react-lite";

const PublicRoute = observer(({component: Component, ...rest}) => {
    const user = userStore.user

    return (
        <Route {...rest} render={props => (
            user ? <Redirect to="/chat" /> : <Component {...props} />
        )} />
    );
});

export default PublicRoute
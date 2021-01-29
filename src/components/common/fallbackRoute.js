import React from "react";
import {Redirect} from 'react-router-dom'
import {userStore} from "../../store/user";
import {observer} from "mobx-react-lite";

const FallbackRoute = observer(() => {
    const user = userStore.user
    if(user) return <Redirect to='/chat'/>
    return <Redirect to ='/register'/>
})

export default FallbackRoute
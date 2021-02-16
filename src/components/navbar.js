import React from "react";
import {userStore} from "../store/user";
import {observer} from "mobx-react-lite";

const Navbar = observer(() => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a style={{marginLeft: '10px'}} href="#" className="brand-logo">React-chat</a>
                {userStore.user &&
                <i style={{width: 10, height: 10}} onClick={userStore.signOut}
                   className="material-icons sign-out">exit_to_app</i>
                }
            </div>
        </nav>
    )
})

export default Navbar

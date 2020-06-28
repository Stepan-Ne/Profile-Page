import React from "react";
import s from './../ProfilePage.module.css'
import {NavLink} from "react-router-dom";
const Nav = () => {
    return (
        <div >
            <div>
                <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink activeClassName={s.active} to="/dialogs">Dialogs</NavLink>
            </div>
        </div>
    )
}

export default Nav;
import React from "react";
import s from './ProfilePage.module.css'
import Wall from "./Wall/Wall";
const ProfilePage = () => {
    return (
        <div className={s.profilePage}>
            <div className={s.header}>Header</div>
            <div className={s.row}>
                <div className={s.nav}>Nav</div>
                <div className={s.profile}><Wall/></div>

            </div>



        </div>
    )
}

export default ProfilePage;
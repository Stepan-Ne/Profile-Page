import React from "react";
import s from './ProfilePage.module.css'
import Wall from "./Wall/Wall";


const ProfilePage = (props) => {

    return (
        <div>
            <Wall postData={props.postData} dispatch={props.dispatch}/>
        </div>
    )
}

export default ProfilePage;
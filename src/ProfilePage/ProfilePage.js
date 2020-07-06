import React from "react";
import s from './ProfilePage.module.css'
import Wall from "./Wall/Wall";


const ProfilePage = (props) => {

    return (
        <div>
            <Wall postData={props.postData} addPost={props.addPost}/>
        </div>
    )
}

export default ProfilePage;
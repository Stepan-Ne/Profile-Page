import React from "react";
import s from './ProfilePage.module.css'
import Wall from "./Wall/Wall";


const ProfilePage = (props) => {

    return (
        <div>
            <Wall postData={props.postData} addPost={props.addPost}
                  newPostText={props.newPostText}
                  newText={props.newText}/>
        </div>
    )
}

export default ProfilePage;
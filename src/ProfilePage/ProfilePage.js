import React from "react";
import Wall from "./Wall/Wall";


const ProfilePage = (props) => {
    return (
        <div>
            <Wall postData={props.postData} dispatch={props.dispatch}/>
        </div>
    )
}

export default ProfilePage;
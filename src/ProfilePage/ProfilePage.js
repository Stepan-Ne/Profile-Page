import React from "react";
import Wall from "./Wall/Wall";
import WallContainer from "./Wall/WallContainer";


const ProfilePage = (props) => {
    return (
        <div>
            <WallContainer store={props.store}/>
        </div>
    )
}

export default ProfilePage;
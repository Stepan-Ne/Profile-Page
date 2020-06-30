import React from "react";
import s from "../Wall.module.css";

const Post = (props) => {

    return (
        <div className={s.post}>
            {props.text}
        </div>
    )
}

export default Post;
import React from "react";
import s from "../Wall.module.css";

const Post = (props) => {

    return (
        <div className={s.post}>
            {props.text}
            <div>
                <div className={s.like}>
                    <button>Like</button>
                </div>
                <div className={s.numOfLikes}>{props.likes}</div>
            </div>

        </div>
    )
}

export default Post;
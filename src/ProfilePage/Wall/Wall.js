import React from "react";
import Post from "./Post/Post";




const Wall = (props) => {

    let newElem = props.postData.map(post => <Post id={post.id} text={post.text}/>)

    return (
        <div>
            <div>
                <p>Create post</p>
                <textarea placeholder='write here' cols="30" rows="5"></textarea>
            </div>
            <div>
                <button>Send</button>
            </div>
            <div>
                {newElem}
            </div>
        </div>
    )
}
export default Wall;
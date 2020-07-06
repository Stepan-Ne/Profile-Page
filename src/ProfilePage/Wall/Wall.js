import React from "react";
import Post from "./Post/Post";




const Wall = (props) => {

    let onAddPost = () => {
        console.log(txt.current.value)
    }

    let txt = React.createRef()

    let newElem = props.postData.map(post => <Post id={post.id} text={post.text} likes={post.likes}/>)

    return (
        <div>
            <div>
                <p>Create post</p>
                <textarea ref={txt} placeholder='write here' cols="30" rows="5"></textarea>
            </div>
            <div>
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <div>
                {newElem}
            </div>
        </div>
    )
}
export default Wall;
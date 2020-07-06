import React from "react";
import Post from "./Post/Post";




const Wall = (props) => {
    let linkText = React.createRef()

    let onAddPost = () => {
        let textValue = linkText.current.value
        linkText.current.value = ''
        props.addPost(textValue)

    }


    let newElem = props.postData.map(post => <Post id={post.id} text={post.text} likes={post.likes}/>)

    return (
        <div>
            <div>
                <p>Create post</p>
                <textarea ref={linkText} placeholder='write here' cols="30" rows="5"/>
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
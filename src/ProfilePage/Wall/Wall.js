import React from "react";
import Post from "./Post/Post";
import {actionCreatorAddPost, actionCreatorUpdateText} from "../../Redux/reducer-wall";


const Wall = (props) => {

    let onAddPost = () => {
        props.addPostWall()
        // props.dispatch(actionCreatorAddPost())
        //linkText.current.value = ''
    }
    let changeText = (event) => {
        let textValue = event.target.value
        props.changeTextWall(textValue)
        // props.dispatch(actionCreatorUpdateText(textValue))
    }


    let newElem = props.postData.map(post => <Post
        id={post.id} text={post.text} likes={post.likes}/>)

    return (
        <div>
            <div>
                <p>Create post</p>
                <textarea onChange={changeText} value={props.newPostText}
                          placeholder='write here' cols="30" rows="5"/>
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
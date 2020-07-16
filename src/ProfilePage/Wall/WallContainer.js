import React from "react";
import {actionCreatorAddPost, actionCreatorUpdateText} from "../../Redux/reducer-wall";
import Wall from "./Wall";


const WallContainer = (props) => {
debugger
    let state = props.store.getState()

    let AddPost = () => {
        props.store.dispatch(actionCreatorAddPost())
        //linkText.current.value = ''
    }
    let changeText = (text) => {
        // let textValue = event.target.value
        props.store.dispatch(actionCreatorUpdateText(text))
    }

    return (
        <div>
           <Wall addPostWall={AddPost} postData={state.reducerWall.posts}
                 newPostText={state.reducerWall.newPostText}
                 changeTextWall={changeText}/>
        </div>
    )
}
export default WallContainer;
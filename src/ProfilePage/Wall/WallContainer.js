import React from "react";
import {actionCreatorAddPost, actionCreatorUpdateText} from "../../Redux/reducer-wall";
import Wall from "./Wall";
import StoreContext from "../../StoreContext";


const WallContainer = (props) => {
    debugger
    // let state = props.store.getState()

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()
                let AddPost = () => {
                    store.dispatch(actionCreatorAddPost())
                    //linkText.current.value = ''
                }
                let changeText = (text) => {
                    // let textValue = event.target.value
                    store.dispatch(actionCreatorUpdateText(text))
                }

               return <Wall addPostWall={AddPost} postData={state.reducerWall.posts}
                      newPostText={state.reducerWall.newPostText}
                      changeTextWall={changeText}/>
                }
            }
            </StoreContext.Consumer>
            )
            }
            export default WallContainer;
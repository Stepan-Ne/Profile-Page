import React from "react";
import {actionCreatorAddPost, actionCreatorUpdateText} from "../../Redux/reducer-wall";
import Wall from "./Wall";
import {connect} from "react-redux";


// const WallContainer = (props) => {
//     debugger
//     // let state = props.store.getState()
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 // let state = store.getState()
//                 let AddPost = () => {
//                     store.dispatch(actionCreatorAddPost())
//                     //linkText.current.value = ''
//                 }
//                 let changeText = (text) => {
//                     // let textValue = event.target.value
//                     store.dispatch(actionCreatorUpdateText(text))
//                 }
//
//                return <Wall addPostWall={AddPost} postData={state.reducerWall.posts}
//                       newPostText={state.reducerWall.newPostText}
//                       changeTextWall={changeText}/>
//                 }
//             }
//             </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => { //замапить стейт на пропсы. props will be key of obj
  return {
     postData: state.reducerWall.posts,
      newPostText: state.reducerWall.newPostText
  }
}
let mapDispatchToProps = (dispatch) => { //передаем callbacks
    return {
        addPostWall: () => {
            dispatch(actionCreatorAddPost())
        },
        changeTextWall: (text) => {
            dispatch(actionCreatorUpdateText(text))
        }
    }
}
const WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall)


export default WallContainer;
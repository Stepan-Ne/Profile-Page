const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'

const reducerWall = (action, state) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 4,
                text: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case UPDATE_NEW_TEXT:
            state.newPostText = action.newText
            return state

        default:
            return state
    }
}

export const actionCreatorAddPost = () => ({type: ADD_POST})
export const actionCreatorUpdateText = (txt) => {
    return {type: UPDATE_NEW_TEXT, newText: txt}
}


export default reducerWall;
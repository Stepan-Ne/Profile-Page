const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'

const reducerWall = (action, state) => {

    if (action.type === ADD_POST) {
        let newPost = {
            id: 4,
            text: state.newPostText,
            likes: 0
        };
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_TEXT) {
        state.newPostText = action.newText
    }

    return state
}

export default reducerWall;
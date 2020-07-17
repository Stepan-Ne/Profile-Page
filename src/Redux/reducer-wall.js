const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'

let x = {
    posts: [
        {id: 1, text: 'Hello!', likes: 3},
        {id: 2, text: 'Hi there!', likes: 4},
        {id: 3, text: 'I sent message!', likes: 5}
    ],
    newPostText: 'lala'
}

const reducerWall = (state = x, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                text: state.newPostText,
                likes: 0
            };
            let copyState = {...state}
            copyState.posts = [...state.posts]
            copyState.posts.push(newPost)
            copyState.newPostText = ''
            return copyState
        }
        case UPDATE_NEW_TEXT: {
            let copyState = {...state}
            copyState.newPostText = action.newText
            return copyState
        }
        default:
            return state
    }
}

export const actionCreatorAddPost = () => ({type: ADD_POST})
export const actionCreatorUpdateText = (txt) => {
    return {type: UPDATE_NEW_TEXT, newText: txt}
}


export default reducerWall;
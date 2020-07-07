const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'

let state = {
    postData: {
       posts: [
           {id: 1, text: 'Hello!', likes: 3},
           {id: 2, text: 'Hi there!', likes: 4},
           {id: 3, text: 'I sent message!', likes: 5}
       ],
        newPostText: 'lala'
    },
    subscribe(observer) {
        this.rerenderSt = observer;
    },
    rerenderSt() {
        console.log('hi')
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                text: this.postData.newPostText,
                likes: 0
            };
            this.postData.posts.push(newPost)
            this.rerenderSt(this.postData.posts)
        } else if (action.type === 'UPDATE-NEW-TEXT') {
            this.postData.newPostText = action.newText
            this.rerenderSt(this.postData.posts)
        }
    }
}
export const actionCreatorAddPost = () => ({type: ADD_POST})
export const actionCreatorUpdateText = (txt) => {
    return {type: UPDATE_NEW_TEXT, newText: txt}
}
// window.state = state

export default state;
import {rerenderState} from "../rerender";

let state = {

    postData: [
    {id: 1, text: 'Hello!', likes: 3},
    {id: 2, text: 'Hi there!', likes: 4},
    {id: 3, text: 'I sent message!', likes: 5}
],
    addPost(text) {

        let newPost = {
            id: 4, text: text, likes: 0
        };
        this.postData.push(newPost)
        rerenderState(state)
    }
}


export default state;
import reducerWall from "./reducer-wall";

let store = {
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
        this.postData = reducerWall(action, this.postData)
        this.rerenderSt(this.postData)
    }
}


// window.store = store

export default store;
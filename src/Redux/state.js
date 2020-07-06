
let state = {
    postData: [
    {id: 1, text: 'Hello!', likes: 3},
    {id: 2, text: 'Hi there!', likes: 4},
    {id: 3, text: 'I sent message!', likes: 5}
],
    subscribe(observer) {
        this.rerenderSt = observer;
    },
    rerenderSt() {
        console.log('hi')
    },
    addPost(text) {
        let newPost = {
            id: 4, text: text, likes: 0
        };
        this.postData.push(newPost)
        this.rerenderSt()
    },
    newText(newText) {
        this.newPostText[0] = newText
        this.rerenderSt()

    },
    newPostText: ['la-la']

}

window.state = state

export default state;
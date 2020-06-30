import React from "react";
import s from './Wall.module.css'


let postData = [
    {id: 1, text: 'Hello!'},
    {id: 2, text: 'Hi there!'},
    {id: 3, text: 'I sent message!'}
]


const Post = (props) => {

    return (
        <div className={s.post}>
            {props.text}
        </div>
    )
}
let newElem = postData.map(post => <Post id={post.id} text={post.text}/>)

const Wall = () => {
    return (
        <div>
            <div>
                <p>Create post</p>
                <textarea placeholder='write here' cols="30" rows="5"></textarea>
            </div>
            <div>
                <button>Send</button>
            </div>
            <div>
                {newElem}
            </div>
        </div>
    )
}
export default Wall;
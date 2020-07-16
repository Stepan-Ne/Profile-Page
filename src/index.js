
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


 let rerenderState = (state) => {
debugger
    ReactDOM.render(
        <BrowserRouter>
            <App postData={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderState(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderState(state)
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

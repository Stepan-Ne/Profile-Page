
import * as serviceWorker from './serviceWorker';
import state from './Redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


 let rerenderState = (stateData) => {
    ReactDOM.render(
        <BrowserRouter>
            <App postData={stateData} dispatch={state.dispatch.bind(state)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderState(state.postData.posts)
state.subscribe(rerenderState)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


 export let rerenderState = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}




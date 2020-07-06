import React from "react";
import './App.css';
import ProfilePage from "./ProfilePage/ProfilePage";
import s from "./ProfilePage/ProfilePage.module.css";
import Nav from "./ProfilePage/NavBar/Nav";
import Dialogs from "./ProfilePage/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className={s.profilePage}>
                <div className={s.header}>
                    Header
                </div>
                <div className={s.row}>
                    <div className={s.nav}>
                        <Nav/>
                    </div>
                    <div className={s.profile}>
                        <Route path='/profile'
                               render={() => <ProfilePage
                                   postData={props.appState.postData}
                                   addPost={props.appState.addPost}
                                   newPostText={props.appState.newPostText}
                                   newText={props.appState.newText}
                               />}/>
                        <Route path='/dialogs' component={Dialogs}/>
                    </div>

                </div>
            </div>

        </BrowserRouter>
    )
}

export default App;


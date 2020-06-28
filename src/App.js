import React from "react";
import './App.css';
import ProfilePage from "./ProfilePage/ProfilePage";
import s from "./ProfilePage/ProfilePage.module.css";
import Nav from "./ProfilePage/NavBar/Nav";
import Dialogs from "./ProfilePage/Dialogs/Dialogs";
import Wall from "./ProfilePage/Wall/Wall";
import {BrowserRouter, Route} from "react-router-dom";



const App = () => {
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
                        <Route path='/profile' component={ProfilePage}/>
                        <Route path='/dialogs' component={Dialogs}/>
                    </div>

                </div>
            </div>

        </BrowserRouter>
    )
}

export default App;


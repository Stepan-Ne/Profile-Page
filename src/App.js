import React from "react";
import './App.css';
import ProfilePage from "./ProfilePage/ProfilePage";
import s from "./ProfilePage/ProfilePage.module.css";
import Nav from "./ProfilePage/NavBar/Nav";
import Dialogs from "./ProfilePage/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Users from "./Users/Users";



const App = (props) => {

    return (

            <div className={s.profilePage}>
                <div className={s.header}>
                    Header
                </div>
                <div className={s.row}>
                    <div className={s.nav}>
                        <Nav/>
                    </div>
                    <div className={s.profile}>
                        <Route path='/profile' render={() => <ProfilePage />}/>
                        <Route path='/dialogs' component={Dialogs}/>
                        <Route path='/users' render={() => <Users/>} />
                    </div>

                </div>
            </div>


    )
}

export default App;


import {combineReducers, createStore} from "redux";
import reducerWall from "./reducer-wall";

let reducers = combineReducers({reducerWall})

let store = createStore(reducers)


export default store;
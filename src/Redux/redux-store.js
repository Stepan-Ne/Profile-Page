import {combineReducers, createStore} from "redux";
import reducerWall from "./reducer-wall";

let reducers = combineReducers({reducerWall})

let store = createStore(reducers)

window.store = store
export default store;
import React from "react";
import store from "./Redux/redux-store";
import App from "./App";

const StoreContext = React.createContext(null)

export const Provider = (props) => {
    return  <StoreContext.Provider value={store}>
        <App/>
    </StoreContext.Provider>
}

export default StoreContext;
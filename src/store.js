import { createStore, combineReducers, applyMiddleware } from "redux";
//Middleware
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
//Reducers
import mathReducer from "./reducers/mathReducer";
import userReducer from "./reducers/userReducer";

const store = createStore(
    combineReducers( {mathReducer, userReducer} ), 
    {}, 
    applyMiddleware( logger, thunk, promise ) );

export default store;
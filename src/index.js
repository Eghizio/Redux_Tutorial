import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";

//Reducers
const mathReducer = (state = 
    {
        result: 1,
        lastValues: [],
        username: "Eghizio"
    }, action) => {
    switch(action.type){
        case "ADD":
        state = {
            ...state,
            result: state.result + action.payload,
            lastValues: [...state.lastValues, action.payload]
        };
            break;
        case "SUBSTRACT":
        state = {
            ...state,
            result: state.result - action.payload,
            lastValues: [...state.lastValues, action.payload]
        };
            break;
        default:
    }
    return state;
};

const userReducer = (state = 
    {
        name: "Eghizio",
        age: 21
    }, action) => {
    switch(action.type){
        case "SET_NAME":
        state = {
            ...state,
            name: action.payload
        };
            break;
        case "SET_AGE":
        state = {
            ...state,
            age: action.payload
        };
            break;
        default:
    }
    return state;
};

//Redux expected pattern
// const myLogger = (store) => (next) => (action) => {
//     console.log("Logged Action: ", action);
//     next(action);
// };

const store = createStore(combineReducers( {mathReducer, userReducer} ), 
                            {}, applyMiddleware( logger ) );

//Debug and feedback
store.subscribe(() => {
    // console.log("Store updated!", store.getState());
});

//Change state
store.dispatch({
    type: "ADD",
    payload: 44
});

store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "SUBSTRACT",
    payload: 88
});

store.dispatch({
    type: "SET_AGE",
    payload: 22
});


//Render App
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

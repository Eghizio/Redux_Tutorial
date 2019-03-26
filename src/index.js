import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from "redux";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//Redux
//import { createStore, combineReducers } from "redux";

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

const store = createStore(combineReducers({mathReducer, userReducer}));

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});

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


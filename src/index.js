import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

//Redux
import { Provider } from "react-redux";
import store from "./store";

//Render App
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    document.getElementById('root'));

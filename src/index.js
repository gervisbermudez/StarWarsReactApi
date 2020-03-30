import React from 'react';
import ReactDOM from 'react-dom';
import store from '../src/app/store/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import App from './app/App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

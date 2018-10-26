import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension'
// eslint-disable-next-line
Array.prototype.remove = function(from, to){
    let rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxPromise(),thunk)));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

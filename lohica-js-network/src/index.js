import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import allReducers from './reducers/rootReducer';
import { Provider } from 'react-redux';

const loggerMiddleware = createLogger();

const store = createStore (
    allReducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

function render () {
    ReactDOM.render(
        <Provider store = {store}>
            <BrowserRouter>
                <div>
                    <App />
                </div>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
}

render();

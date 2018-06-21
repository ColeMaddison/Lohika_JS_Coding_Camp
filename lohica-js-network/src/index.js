import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers/rootReducer';
import { Provider } from 'react-redux';

const store = createStore (allReducers);
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

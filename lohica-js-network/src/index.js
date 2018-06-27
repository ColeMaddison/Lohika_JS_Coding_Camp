import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import './index.css';
import App from './App';
import allReducers from './reducers/rootReducer';
import { AUTHENTICATED } from './actions/logginActions'


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(allReducers);

const token = localStorage.getItem('tkn');

if(token){
    store.dispatch({type: AUTHENTICATED});
}

function render () {
    ReactDOM.render(
        <Provider store = {store}>
            <Router>
                <div>
                    <App />
                </div>
            </Router>
        </Provider>,
        document.getElementById('root')
    );
}

render();

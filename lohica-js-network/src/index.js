import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import allReducers from './reducers/rootReducer';
import { Provider } from 'react-redux';


const store = createStore (allReducers);
function render () {
    ReactDOM.render(
        <Provider store = {store}>
            <App store = {store}/>
        </Provider>,
        document.getElementById('root')
    );
}
registerServiceWorker();

store.subscribe(render);

render();

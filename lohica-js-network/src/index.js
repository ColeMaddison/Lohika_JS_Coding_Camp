import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers/rootReducer';
import { Provider } from 'react-redux';
import NavigationBar from './components/navBar/NavigationBar'
import registerServiceWorker from './registerServiceWorker';
import FooterComponent from './components/footer/FooterComponent';

const store = createStore (allReducers);
function render () {
    ReactDOM.render(
        <Provider store = {store}>
            <div>
                <NavigationBar />
                <App store = {store}/>
                <FooterComponent />
            </div>
        </Provider>,
        document.getElementById('root')
    );
}
registerServiceWorker();

store.subscribe(render);

render();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {myReducer} from './redux/reducers/myReducer';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const store = createStore(
    myReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
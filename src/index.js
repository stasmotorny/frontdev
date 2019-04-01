import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {myReducer} from './redux/reducers/myReducer';
import thunk from 'redux-thunk';


function playlist(state = []) {
    return state;
}

/**
 * Вынеси все, что относится к стору в отдельную директорию.
 * Такая структура должна быть:
 *  - src
 *      - components
 *          - pages
 *      - containers
 *      - redux
 *          - constants
 *          - actions
 *          - reducers
 *
 * Как-то так
 *
 *  createStore тоже в отдельный файл вынеси в редакс директорию
 *
 *  dphlxxsh1 - это что-то вроде сикрет кея, наверное. Его надо в отдельный файл вынести т добавить файл в гит игнор
 *
 *  <Image publicId={data.public_id } signUrl="true"> - signUrl="true" убери, оно ж без него работает, а браузер кидает ошибку в консоль
 *
 *  class App extends Component - нету стейта, сделай функциональный компонент
 *
 *  --------------
 *  const initialState = {};
 *  export function myReducer(state = initialState, action) - нету смысла объявляьть константу, иожно записать просто state = {}
 *  --------------
 *
 *  + в одном случае ты пишешь "export const Request = () =>", в другом "export function myReducer(state = initialState, action)" - используй уже тогда только стрелочное описание
 *
 *  И попроси Аню какой-то нормальный дизайн нарисовать)
 *
 * **/


/* eslint-disable no-underscore-dangle */
const store = createStore(
    myReducer,
    // playlist,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

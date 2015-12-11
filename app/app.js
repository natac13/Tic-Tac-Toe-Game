import './scss/main.scss';

import React, { Component } from 'react';
import { render }           from 'react-dom';

import { Provider }         from 'react-redux';
import configureStore       from './store/configureStore';

import App from './containers/App';

const store = configureStore();
const rootElement = document.getElementById('app');
console.log(store.getState());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

// make entry point
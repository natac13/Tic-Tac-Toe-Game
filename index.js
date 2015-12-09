import './app/scss/main.scss';

import React, { Component } from 'react';
import { render }           from 'react-dom';

import { Provider }         from 'react-redux';
import configureStore       from './app/store/configureStore';

import App from './app/containers/App';

const store = configureStore();
const rootElement = document.getElementById('app');


render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

// make entry point
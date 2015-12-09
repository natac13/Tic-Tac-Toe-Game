import './scss/main.scss';

import React, { Component } from 'react';
import { render }           from 'react-dom';

import { Provider }         from 'react-redux';
import { createStore }      from 'redux';
import rootReducer          from './reducers'

import Main from './Main';

const store = createStore(rootReducer);

const deploy = () => {
    render(
        <Main store={store}/>,
        document.getElementById('app')
    );

}

store.subscribe(deploy);
deploy();


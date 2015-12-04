import './scss/main.scss';

import React, { Component } from 'react';
import { render }           from 'react-dom';

import { Provider }         from 'react-redux';
import store                from './js/makeGame';

import Main from './Main';


render(
    <Main store={store}/>,
    document.getElementById('app'));
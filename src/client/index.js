import React from 'react';
import ReactDOM from 'react-dom';

import App from '../containers/app';
import configureStore from '../store/store';

let initialState = window.__INITIAL_STATE__;
let store = configureStore(initialState);
let group = initialState.group;
let page = initialState.page;
let item = initialState.item;

ReactDOM.render(
  React.createElement(App, {store, group, page, item}),
  document.getElementById('app-container')
);

import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import configureStore from './store/store';
import App from './containers/app';

import data from './dummy-data';

// require('babel-polyfill');

const env = process.env.NODE_ENV || 'development';
let port = process.env.PORT;
let app = express();

// Built assets.
app.use('/public', express.static('build'));

app.get('/api/items/:page', (req, res) => {
  res.status(200).json(data.pages[0]);
});

app.get('/', (req, res) => {
  res.status(200).json({ hello: 'world'});
});


function renderPage(group=null, page=null, item=null) {
  data.group = group;
  data.page = page;
  data.item = item;
  let store = configureStore(data);
  let renderedApp = renderToString(React.createElement(App, {store, group, page, item}));

  let html = `
    <meta name="viewport" content="width=device-width, initial-scale=0.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0, minimal-ui">
    <link rel="stylesheet" type="text/css" href="/public/style.css">
    <div id="app-container">
      ${renderedApp}
    </div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())};</script>
    <script async defer src="/public/bundle.js"></script>
  `

  return html;
}

app.get('/gallery/:group', (req, res) => {
  let {group = ''} = req.params;

  res.status(200).send(renderPage(group));
});

app.get('/item/:item', (req, res) => {
  let {item = ''} = req.params;

  res.status(200).send(renderPage(null, null, item));
});

app.get('/healthcheck', (req, res) => {
  res.status(200).json({ ack: 'OK' });
});

// Start it up.
app.listen(port, () => console.log(`Server listening on port: ${port}`));

export default app;

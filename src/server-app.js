import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import GalleryApp from './containers/gallery-app';

// require('babel-polyfill');

const env = process.env.NODE_ENV || 'development';
let port = process.env.PORT;
let app = express();

// Built assets.
app.use('/public', express.static('src/containers'));

app.get('/', (req, res) => {
  res.status(200).json({ hello: 'world'});
});

app.get('/gallery/:group', (req, res) => {
  let {group = ''} = req.params;

  function renderPage() {
    let renderedApp = renderToString(React.createElement(GalleryApp, {group}));

    let html = `
      <meta name="viewport" content="width=device-width, initial-scale=0.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0, minimal-ui">
      <div id="app-container">
        <h1>${group}</h1>
        ${renderedApp}
      </div>
    `

    return html;
  }

  res.status(200).send(renderPage());
});

app.get('/healthcheck', (req, res) => {
  res.status(200).json({ ack: 'OK' });
});

// Start it up.
app.listen(port, () => console.log(`Server listening on port: ${port}`));

export default app;

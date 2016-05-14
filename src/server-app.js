import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './containers/app';

// require('babel-polyfill');

const env = process.env.NODE_ENV || 'development';
let port = process.env.PORT;
let app = express();

// Built assets.
app.use('/public', express.static('src/containers'));

app.get('/', (req, res) => {
  res.status(200).json({ hello: 'world'});
});

let store = {
  items: [
    {
      id: 1,
      name: 'Item1',
      author: 'Author1',
      url: '/item/item1',
      image: 'https://placekitten.com/200/200',
      products: [
        {
          name: 'Product1',
          color: 'brown',
          size: 'size',
          format: 'format',
          template_id: 1,
          tags: ['brown', 'cat'],
        }
      ],
    },
    {
      id: 1,
      name: 'Item2',
      author: 'Author2',
      url: '/item/item2',
      image: 'https://placekitten.com/200/300',
      products: [
        {
          name: 'Product2',
          color: 'grey',
          size: 'size',
          format: 'format',
          template_id: 1,
          tags: ['grey', 'cat'],
        }
      ],
    },
  ]
}

app.get('/gallery/:group', (req, res) => {
  let {group = ''} = req.params;

  function renderPage() {
    let renderedApp = renderToString(React.createElement(App, {store, group}));

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

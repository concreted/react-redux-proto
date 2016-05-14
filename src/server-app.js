import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

// require('babel-polyfill');

const env = process.env.NODE_ENV || 'development';
let port = process.env.PORT;
let app = express();

// Built assets.
app.use('/public', express.static('build'));

app.get('/', (req, res) => {
  res.status(200).json({ hello: 'world'});
});

app.get('/healthcheck', (req, res) => {
  res.status(200).json({ ack: 'OK' });
});

// Start it up.
app.listen(port, () => console.log(`Server listening on port: ${port}`));

export default app;

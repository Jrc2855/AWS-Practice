'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req, res, next) => {
  res.status(200).send('Proof of life from our base endpoint.');
});

app.get('/forwardslash', (req, res, next) => {
  res.status(200).send('This is a redundantly confusing endpoint.');
});

app.get('/hello', (req, res, next) => {
  res.status(200).send('Hello World from our hello endpoint');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
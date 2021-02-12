const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/posts', (req, res) => {
  // Endpoint 1
  res.send();
});

app.post('/posts', (req, res) => {
  // Endpoint 2
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

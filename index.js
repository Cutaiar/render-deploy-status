// Tiny node server to make Render deploy status available

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello, world!'
  });
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});

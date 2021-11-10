const express = require('express');
const app = express();
const port = 3001;

app.get('/restochef/', (req, res) => {
  res.render('/dist/restochef/index.html');
});

app.get('/lamplandia/', (req, res) => {
  res.render('/dist/restochef/lamplandia.html');
});

app.listen(port, () => {
  console.log(`Example sites are listening at http://localhost:${port}`);
});
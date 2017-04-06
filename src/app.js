var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Website running on port 3000');
});

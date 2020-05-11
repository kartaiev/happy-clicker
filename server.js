const express = require('express');
const path = require('path');

const ngApp = express();

ngApp.use(express.static('./dist/happy-clicker'));

ngApp.get('/*', function (request, response) {
  response.sendFile(path.join(__dirname, '/dist/happy-clicker/index.html'));
});

ngApp.listen(process.env.PORT || 8080);

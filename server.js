//hier gebeurt de server shit



const express = require('express');
const app = express()
const port = process.env.PORT || 3500;
const path = require("path");

//let request = require('request');

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/assets', express.static(path.join(__dirname, 'assets')))

// app.get('/models', function(req, res) {
//   res.sendFile(path.join(__dirname + '/public/models'));
// });

let init = () => {
  app.listen(port, () => console.log(`App listening on port ${port}!`));
};

init();
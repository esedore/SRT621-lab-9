const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const routes = require('./controllers/routes.js');
const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname+"controllers")));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.set('view engine', 'ejs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('');
});

app.use('/',routes);

app.listen(3000, () => {
    console.log('listening on port 3K');
});
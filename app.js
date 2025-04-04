const express = require('express');
express.static.mime.types['wasm'] = 'application/wasm';

const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./routes/api');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// WebSocket setup
require('./sockets/factory.js')(io);

// Enable CORS
app.all('*', cors());

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1);

// Headers
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Middleware
app.use(favicon(path.join(__dirname, 'public', 'demos', 'images', 'favicon.ico')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API routes
app.use('/api', api);

// Catch 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler

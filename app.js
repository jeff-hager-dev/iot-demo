var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var swaggerJSDoc = require('swagger-jsdoc');
var apiRoutes = require('./apiRoutes');

var port = 3005;
var app = express();

var swaggerDefinition = {
  info: {
    title: 'IOT API',
    version: '1.0.0',
    description: 'Demonstrating IOT',
  },
  host: 'localhost:'+port,
  basePath: '/',
};

var options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./apiRoutes/*.js'],
};


// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', apiRoutes);

app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
 
app.use(function (req, res, next) {
  var allowedOrigins = ['http://127.0.0.1:3005', 'http://localhost:3005', 'http://127.0.0.1:3005', 'http://localhost:3005'];
  var origin = req.headers.origin;
  console.log(origin);
  if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status( err.code || 500 )
    .json({
      status: 'error',
      message: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  .json({
    status: 'error',
    message: err.message
  });
});

var server = require('http').createServer(app);

var socketHanlder = require('./socketEvents')(server);

server.listen(port);

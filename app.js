var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var swaggerJSDoc = require('swagger-jsdoc');
var apiRoutes = require('./apiRoutes');
var config = require('./config');

var app = express();

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(config.swaggerOptions);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules/bootstrap/dist/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/node_modules/core-js/client', express.static(__dirname + '/node_modules/core-js/client/'));
app.use('/node_modules/zone.js/dist', express.static(__dirname + '/node_modules/zone.js/dist/'));
app.use('/node_modules/systemjs/dist', express.static(__dirname + '/node_modules/systemjs/dist/'));
app.use('/node_modules/font-awesome/', express.static(__dirname + '/node_modules/font-awesome/'));
app.use('/node_modules/@angular', express.static(__dirname + '/node_modules/@angular/'));
app.use('/node_modules/rxjs', express.static(__dirname + '/node_modules/rxjs/'));
app.use('/node_modules/socket.io-client/', express.static(__dirname + '/node_modules/socket.io-client/'));
app.use('/node_modules/moment/min/moment-with-locales.js', express.static(__dirname + '/node_modules/moment/min/moment-with-locales.js'));
app.use('/node_modules/moment-timezone/builds/moment-timezone.min.js', express.static(__dirname + '/node_modules/moment-timezone/builds/moment-timezone.min.js'));
app.use('/node_modules/angular-in-memory-web-api/bundles/in-memory-web-api.umd.js', express.static(__dirname + '/node_modules/angular-in-memory-web-api/bundles/in-memory-web-api.umd.js/'));
app.use('/node_modules/angular2-color-picker', express.static(__dirname + '/node_modules/angular2-color-picker/'));

var server = require('http').createServer(app);
var socketHandler = require('./socketEvents')(server);

app.use('/', apiRoutes(socketHandler));

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
  var origin = req.headers.origin;
  if(config.allowedOrigins.indexOf(origin) > -1){
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
if (config.env === 'dev') {
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

server.listen(config.port, function(){
  console.log(config.env+" server listening on "+config.port);
});

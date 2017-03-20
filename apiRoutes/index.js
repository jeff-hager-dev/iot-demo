var express = require('express');
var router = express.Router();
var reaction = require('./reaction');
var color = require('./color');
var checkin = require('./checkin');
var standing = require('./standing');

module.exports = function(socketHandler){
    
    router.get('/api/checkin/:name/:gender/:number', checkin(socketHandler));

    router.get('/api/standing/:number', standing(socketHandler));
    
    router.get('/api/color/:number', color(socketHandler));

    router.get('/api/reaction/:number', reaction(socketHandler));

    return router;
};
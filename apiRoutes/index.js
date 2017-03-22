var express = require('express');
var router = express.Router();
var reaction = require('./reaction');
var getColor = require('./getColor');
var setColor = require('./setColor');
var checkin = require('./checkin');
var standing = require('./standing');

module.exports = function(socketHandler) {
    
    router.get('/api/checkin/:name/:gender/:number', checkin(socketHandler));

    router.get('/api/standing/:number/:isStanding', standing(socketHandler));
    
    router.get('/api/color/:number/:color', setColor(socketHandler));

    router.get('/api/color/:number', getColor(socketHandler));

    router.get('/api/reaction/:number', reaction(socketHandler));

    return router;
};
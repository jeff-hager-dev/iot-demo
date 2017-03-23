var express = require('express');
var router = express.Router();
var reaction = require('./reaction');
var getColor = require('./getColor');
var setColor = require('./setColor');
var checkin = require('./checkin');
var clearCheckin = require('./clearCheckin');
var switchApi = require('./switchApi');

module.exports = function(socketHandler) {
    router.get('/api/checkin/clear', clearCheckin);

    router.get('/api/checkin/:name/:gender/:number', checkin(socketHandler));

    router.get('/api/switch/:number/:isOn', switchApi(socketHandler));
    
    router.get('/api/color/:number/:color', setColor(socketHandler));

    router.get('/api/color/:number', getColor(socketHandler));

    router.get('/api/reaction/:number', reaction(socketHandler));

    return router;
};
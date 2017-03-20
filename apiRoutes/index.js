var express = require('express');
var router = express.Router();

module.exports = function(socketHandler){

    /**
     * @swagger
     * api/checkin:
     *   get:
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: a greeting
     */
    router.get('/api/checkin', function(req, res){
        var data = {};
        socketHandler.checkin(data);
        res.status(200).json({"message": "checked in"});
    });

    /**
     * @swagger
     * api/standing:
     *   get:
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: a greeting
     */
    router.get('/api/standing', function(req, res){
        var data = {};
        socketHandler.stand(data);
        res.status(200).json({"message": "success"});
    });

    /**
     * @swagger
     * api/color:
     *   get:
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: a greeting
     */
    router.get('/api/color', function(req, res){
        var data = {};
        socketHandler.setColor(data);
        res.status(200).json({"message": "success"});
    });

    /**
     * @swagger
     * api/reaction:
     *   get:
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: a greeting
     */
    router.get('/api/reaction', function(req, res){
        var data = {};
        socketHandler.reaction(data);
        res.status(200).json({"message": "success"});
    });


    return router;
};
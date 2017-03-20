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
        socketHandler.checkin();
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
        socketHandler.stand();
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
        socketHandler.setColor();
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
        socketHandler.reaction();
        res.status(200).json({"message": "success"});
    });


    return router;
};
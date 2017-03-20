var express = require('express');
var router = express.Router();

module.exports = function(socketHandler){

    /**
     * @swagger
     * api/checkin/{name}/{gender}/{number}:
     *   get:
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: name
     *         description: name of user.
     *         in: path
     *         required: true
     *         type: string
     *       - name: number
     *         description: name of user.
     *         in: path
     *         required: true
     *         type: number
     *         format: int
     *       - name: gender
     *         description: name of user.
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: a message
     */
    router.get('/api/checkin/:name/:gender/:number', function(req, res){
        if(!req.params || !req.params.name || !req.params.gender || !req.params.number) {
            res.status(400).json({"message": "missing information"});
        }

        var data = {
            name: req.params.name,
            gender: req.params.gender,
            number: req.params.number
        };

        socketHandler.checkin(data);
        res.status(200).json({"message": "checked in"});
    });

    /**
     * @swagger
     * api/standing/{number}:
     *   get:
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: number
     *         description: name of user.
     *         in: path
     *         required: true
     *         type: number
     *         format: int
     *     responses:
     *       200:
     *         description: message
     */
    router.get('/api/standing/:number', function(req, res){
        if(!req.params || !req.params.number) {
            res.status(400).json({"message": "missing information"});
        }

        var data = {
            number: req.params.number
        };

        socketHandler.stand(data);
        res.status(200).json({"message": "success"});
    });

    /**
     * @swagger
     * api/color/{number}:
     *   get:
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: number
     *         description: name of user.
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: color hex value
     */
    router.get('/api/color/:number', function(req, res){
        if(!req.params || !req.params.number) {
            res.status(400).json({"message": "missing information"});
        }

        var data = {
            number: req.params.number
        };

        socketHandler.setColor(data);
        res.status(200).json({"message": "success"});
    });

    /**
     * @swagger
     * api/reaction/{number}:
     *   get:
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: number
     *         description: name of user.
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: a greeting
     */
    router.get('/api/reaction/:number', function(req, res){
        if(!req.params || !req.params.number) {
            res.status(400).json({"message": "missing information"});
        }

        var data = {
            number: req.params.number
        };
        
        socketHandler.reaction(data);
        res.status(200).json({"message": "success"});
    });


    return router;
};
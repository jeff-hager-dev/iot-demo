var express = require('express');
var router = express.Router();

module.exports = function(socketHandler){

    /**
     * @swagger
     * api/hello:
     *   get:
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: a greeting
     */
    router.get('/api/hello', function(req, res){
        socketHandler.helloWorld();
        res.status(200).json({"message": "hello world"});
    });


    return router;
};
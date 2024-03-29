var moment = require('moment-timezone');
/**
 * @swagger
 * api/reaction/{number}:
 *   get:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: number
 *         description: user identifier.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: a greeting
 */
var reaction = function(socketHandler){
    return function(req, res){
        if(!req.params || !req.params.number) {
            res.status(400).json({"message": "missing information"});
        }

        var data = {
            number: req.params.number,
            time: moment().tz('America/Chicago')
        };
        
        socketHandler.reaction(data);
        res.status(200).json({"message": "success"});
    };
};

module.exports = reaction;
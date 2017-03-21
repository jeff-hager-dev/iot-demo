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
var standing = function(socketHandler){
    return function(req, res){
       if(!req.params || !req.params.number) {
            res.status(400).json({"message": "missing information"});
        }

        var data = {
            number: req.params.number
        };

        socketHandler.stand(data);
        res.status(200).json({"message": "success"});
    };
};

module.exports = standing;
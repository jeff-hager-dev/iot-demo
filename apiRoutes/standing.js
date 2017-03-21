/**
 * @swagger
 * api/standing/{number}/{isStanding}:
 *   get:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: number
 *         description: name of user
 *         in: path
 *         required: true
 *         type: number
 *         format: int
 *       - name: isStanding
 *         description: is the user standing
 *         in: path
 *         required: true
 *         type: bool
 *     responses:
 *       200:
 *         description: message
 */
var standing = function(socketHandler){
    return function(req, res){
       if(!req.params || !req.params.number || !req.params.isStanding) {
            res.status(400).json({"message": "missing information"});
        }

        var data = {
            number: req.params.number,
            isStanding: req.params.isStanding
        };

        socketHandler.stand(data);
        res.status(200).json({"message": "success"});
    };
};

module.exports = standing;
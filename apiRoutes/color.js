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
var color = function(socketHandler){
    return function(req, res){
        if(!req.params || !req.params.number) {
            res.status(400).json({"message": "missing information"});
        }

        var data = {
            number: req.params.number
        };

        socketHandler.setColor(data);
        res.status(200).json({"message": "success"});
    };
};

module.exports = color;
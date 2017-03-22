var colorData = require('./color.data.js');
/**
 * @swagger
 * api/color/{number}:
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
 *         description: color hex value
 */
var getColor = function(socketHandler) {
    return function(req, res) {
        if(!req.params || !req.params.number) {
            res.status(400).json({"message": "missing information"});
        }

        res.status(200).json(colorData.get(req.params.number));
    };
};

module.exports = getColor;
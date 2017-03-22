var colorData = require('./color.data.js');
/**
 * @swagger
 * api/color/{number}/{color}:
 *   post:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: number
 *         description: user identifier.
 *         in: path
 *         required: true
 *         type: string
 *       - name: color
 *         description: rgb hex color (#000000).
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: color hex value
 */
var setColor = function(socketHandler) {
    return function(req, res) {
        if(!req.params || !req.params.number || !req.params.color) {
            res.status(400).json({"message": "missing information"});
        }

        colorData.set(req.params.number, req.params.color);
        res.status(200).json({"message": "success"});
    };
};

module.exports = setColor;
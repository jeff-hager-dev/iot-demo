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
var checkin = function(socketHandler){
    return function(req, res){
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
    };
};

module.exports = checkin;
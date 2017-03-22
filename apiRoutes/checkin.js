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
 *         description: user identifier.
 *         in: path
 *         required: true
 *         type: number
 *         format: int
 *       - name: gender
 *         description: gender of avatar to be used.
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

        var gender = req.params.gender.toUpperCase();
        if(gender == "MALE" || gender == "M" ) {
            gender = "M";
        } else if(gender == "FEMALE" || gender == "F" ) {
            gender = "F";
        }

        var data = {
            name: req.params.name,
            gender: gender,
            number: req.params.number,
            time: new Date()
        };

        socketHandler.checkin(data);
        res.status(200).json({"message": "checked in"});
    };
};

module.exports = checkin;
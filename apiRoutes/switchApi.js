/**
 * @swagger
 * api/switch/{number}/{isOn}:
 *   get:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: number
 *         description: user identifier
 *         in: path
 *         required: true
 *         type: number
 *         format: int
 *       - name: isOn
 *         description: is the user standing
 *         in: path
 *         required: true
 *         type: bool
 *     responses:
 *       200:
 *         description: message
 */
var switchApi = function(socketHandler){
    return function(req, res){
       if(!req.params || !req.params.number || !req.params.isOn) {
            res.status(400).json({"message": "missing information"});
        }
        var isOn = false;
        var isOnStr = req.params.isOn.toUpperCase();
        if(isOnStr === "TRUE" || isOnStr === "T" || isOnStr === "1" ){
            isOn = true;
        }
        var data = {
            number: req.params.number,
            isOn: isOn
        };

        socketHandler.stand(data);
        res.status(200).json({"message": "success"});
    };
};

module.exports = switchApi;
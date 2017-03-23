var userData = require('./users.data');
/**
 * @swagger
 * api/checkin/clear:
 *   get:
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: a message
 */
var clearCheckin =  function(req, res){
    userData.clearAll();
    res.status(200).json({"message": "cleared checkin"});
};

module.exports = clearCheckin;
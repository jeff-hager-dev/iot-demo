var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /api/hello:
 *   get:
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: a greeting
 */
router.get('/api/hello', function(req, res){
    res.status(200).json({"message": "hello world"});
});


module.exports = router;
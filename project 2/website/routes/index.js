var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

// By Vehicle
router.get('/vehicle', function (req, res, next) {
    res.render('vehicle');
});

module.exports = router;

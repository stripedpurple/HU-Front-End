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


// Products
router.get('/products', function (req, res, next) {
    res.render('products');
});

// story
router.get('/story', function (req, res, next) {
    res.render('story');
});


module.exports = router;

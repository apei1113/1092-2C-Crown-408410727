var express = require('express');
var router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/category_408410727', apiController.getCategories);

module.exports = router;

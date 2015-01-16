var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Security Test Server - Express.Js Secured' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Come At Me - Express.Js Secured' });
});

module.exports = router;

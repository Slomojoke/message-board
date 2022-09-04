var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "My name is Amando and I go to school",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charless",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;

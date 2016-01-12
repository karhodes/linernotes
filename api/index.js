console.log("hello from api");

var router = require('express').Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());


router.get('/posts', function (req, res) {
  res.send('Post Successful');
})


module.exports = router


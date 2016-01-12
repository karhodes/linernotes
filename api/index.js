console.log("hello from api");

var router = require('express').Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());


router.post('/posts', function (req, res) {
  res.post('Post Successful');
})


module.exports = router


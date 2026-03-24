const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let items = [{"id":1, "name":"Roma Novikov"}, {"id":2, "name": "Gordey Aleksandrov"}];
  res.set(items);
});

module.exports = router;

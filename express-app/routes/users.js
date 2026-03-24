const express = require('express');
const router = express.Router();
let users = [{"id":1, "name":"Roma Novikov"}, {"id":2, "name": "Gordey Aleksandrov"}];
/* GET users listing. */
router.get('/', function(req, res, next) {
  let items = users;
  res.json(items);
});

router.post('/', function(req, res, next){
  let newUser = {"id":users.length + 1, "name":req.body.name}
  users.push(newUser);
  res.status(201).json(newUser);
})

module.exports = router;
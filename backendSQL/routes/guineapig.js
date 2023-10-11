var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.app.locals.con.connect((err) => {
    if(err) {
      console.log("err", err)
    }

    let sql = "SELECT * FROM guineapigs"

    req.app.locals.con.query(sql, (err, result) => {
      if(err) {
        console.log("err", err)
      }
      console.log("result", result)
      res.json(result)
    })
  })
});

router.post('/', function(req, res, next) {
  req.app.locals.con.connect((err) => {
    if(err) {
      console.log("err", err)
    }
    const { name, age, likes } = req.body;
    let sql = `INSERT INTO guineapigs(name, age, likes) VALUES("${name}", "${age}", "${likes}")`

    req.app.locals.con.query(sql, (err, result) => {
      if(err) {
        console.log("err", err)
      }
      console.log("result", result)
      res.json(result)
    })
  })
});

module.exports = router;

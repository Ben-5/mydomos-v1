var express = require('express');
var router = express.Router();

var VisitModel = require('../models/visit');

router.get('/', function(req, res, next) {
});

router.get('/results', async function(req, res, next) {
  var searchParams = {isRmv: false, };
  var visits = await VisitModel.find(searchParams);

  res.json({result: true, list: visits});
});

router.post('/addvisit', async function(req, res, next) {

  // generate a ref
  var nbCity = await VisitModel.countDocuments({}, function (err, count) {
    if (err) {res.json({result: false, error: err})} else {return count};
  });
  var newRef = await req.app.locals.visitRefForm(req.body.country, req.body.zip, nbCity + 1);
  
  //push to db the new visit
  var newVisit = await new VisitModel ({
    ref:        newRef,
    title:      req.body.title,
    desc:       req.body.desc,
    host:       req.body.host,
    pics:       req.body.pic,
    cover:      req.body.cover,
    rate:       -1,
    isRmv:      false,
    address:    {
      street: req.body.street,
      zip: req.body.zip,
      city: req.body.city,
      country: req.body.country,
    },
  });
  var visitSaved = await newVisit.save();

  //response
  res.json({result: true, saved: visitSaved});
});









module.exports = router;

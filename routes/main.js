const router = require("express").Router();
const sess = require("express-session");

const User = require('../models/user');
const Code = require('../models/code');

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/code', (req, res) => {
    res.render('code');
})

router.post('/user', (req, res) => {
    sess.code = req.body.code;
    let error = '';
    let code;
    console.log(sess.code);

    Code.findOne({ 'code': sess.code }, (err, result) => {
      code = result;

      if(code != null){
          res.render('user');
      }
      else{
          res.render('code', {error: error});
          return;
      }

    })
})

router.post('/confirm', (req, res) => {
    let user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.gender = req.body.gender;
    user.year = req.body.year;
    user.month = req.body.month;
    user.day = req.body.day;
    user.code = sess.code;
    user.save();
    console.log(user);
    res.redirect('/users');
})

router.get('/users', (req, res) => {
  let people = {};
  User.find({}, (err, users) => {
    people = users;
    res.render('users', { people: people });
  })
})

module.exports = router;

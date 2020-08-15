const express = require('express');
const Router = express.Router();
const Login = require('../modules/login/login');
const UserDetails = require('../modules/userDetails/userDetails');
const jwt =  require('jsonwebtoken');
const { ensureJWTAuthentication } = require('../config/auth');

/* GET home page. */
Router.route('/users')
  .get((req, res) => {
    res.send('Hello world')
  })
  .post((req, res) => {});

// Fetch User Details after successfull login
Router.get('/userDetails', ensureJWTAuthentication, (req, res) => {
    var decodedUserData = req.decoded;
    console.log('decodedUserData', decodedUserData);
    const userResp = new UserDetails();
    const resp = userResp.getUserResponse(decodedUserData.email);
    let respObj = {
      status: 200,
      userDetails: []

    };
    if(resp.length > 0) respObj.userDetails = resp;
    res.json(respObj)
  });

// validate the user is present or not at the time of login
var jwtOptions = {};
jwtOptions.secretOrKey = "react-poc-secret-key";
Router.route('/login')
  .post((req, res) => {
    const login = new Login();
    const resp = login.isValidUser(req.body);
    let respObj = {
      status: 200,
      isValidUser: false,
      token:''
    };
    if(resp.length > 0) {
      respObj.isValidUser = true;
      var userId = 1; // should be dynamic id of the user
      var payload = {id: userId, email: req.body.email};
      var token = jwt.sign(payload, jwtOptions.secretOrKey, {expiresIn: '10h'});
      respObj.token = token;
    }
    res.json(respObj)
  });

module.exports = Router;

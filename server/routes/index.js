const express = require('express');
const Router = express.Router();
const Login = require('../modules/login/login');
const UserDetails = require('../modules/userDetails/userDetails');

/* GET home page. */
Router.route('/users')
  .get((req, res) => {
    res.send('Hello world')
  })
  .post((req, res) => {});

// Fetch User Details after successfull login
Router.route('/userDetails')
  .post((req, res) => {
    const userResp = new UserDetails();
    const resp = userResp.getUserResponse(req.body);
    let respObj = {
      status: 200,
      userResp: []

    };
    if(resp.length > 0) respObj.userResp = resp;
    res.json(respObj)
  });

// validate the user is present or not at the time of login
Router.route('/login')
  .post((req, res) => {
    const login = new Login();
    const resp = login.isValidUser(req.body);
    let respObj = {
      status: 200,
      isValidUser: false
    };
    if(resp.length > 0) respObj.isValidUser = true;
    res.json(respObj)
  });

module.exports = Router;

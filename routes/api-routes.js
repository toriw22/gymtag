// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for User viewing their appointments
  app.get("/newUser", function(req, res) {
    db.Members.findAll({
      where: {
        userType: "rookie"
      }
    }).then(function(results) {
      res.json(results);
    });
  });

    // GET route for Trainer to see all appointments
  app.get("/pro", function(req, res) {
    db.Members.findAll({
      where: {
        userType: "expert"
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // POST route for saving a new todo
  app.post("/newUser", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Members.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      photo: req.body.photo,
      userType: req.body.userType
    }).then(function(results) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(results);
    })
  });
app.post("/pro", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Members.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      photo: req.body.photo,
      userType: req.body.userType
    }).then(function(results) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(results);
    })
  });
app.put("/setappointment", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Members.update({
      gym: req.body.gym,
      month: req.body.month,
      day: req.body.day,
      time: req.body.time,
      am_pm: req.body.am_pm
    }, {
      where: {
        userName: req.body.userName
      }
    }).then(function(results) {
      res.json(results);
    })
  });
};
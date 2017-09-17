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
  app.get("/rookie", function(req, res) {
    db.Rookie.findAll({
      where: {
        userType: "Rookie"
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // GET route for Trainer to see all appointments
  app.get("/expert", function(req, res) {
    db.Expert.findAll({
      where: {
        userType: "Expert"
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/expert/:id/:gymId", function(req, res) {
    console.log("THIS IS MY REQ:" + req.params.gymId);
    db.Expert.findAll({
      where: {
        userType: "Expert",
        gym: req.params.gymId
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/rookie/:id/:gymId", function(req, res) {
    console.log("THIS IS MY REQ:" + req.params.gymId);
    db.Rookie.findAll({
      where: {
        userType: "Rookie",
        gym: req.params.gymId
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Show rookie appointments after submitting appointment form
  // app.get("/rookie/:id", function(req, res) {
  //   db.Rookie.findAll({
  //     where: {
  //       userName: req.params.userName
  //     }
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // POST route for saving a new todo
  app.post("/rookie", function(req, res) {
    db.Rookie.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      photo: req.body.photo,
      userType: req.body.userType,
      gym: req.body.gym
    }).then(function(results) {
      res.json(results);
    })
  });
  
app.post("/expert", function(req, res) {
    db.Expert.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      photo: req.body.photo,
      userType: req.body.userType,
      gym: req.body.gym
    }).then(function(results) {
      res.json(results);
    })
  });
app.post("/setappointment", function(req, res) {
    db.Appointments.create({
      gym: req.body.gym,
      month: req.body.month,
      day: req.body.day,
      time: req.body.time,
      am_pm: req.body.am_pm
    }).then(function(results) {
      res.json(results);
    })
  });

  app.get("/appointments", function(req, res) {
    
        db.Expert.findAll({
          // where: query,
          // include: [db.Appointments]
        }).then(function(results) {
          res.json(results);
        });
      });
};
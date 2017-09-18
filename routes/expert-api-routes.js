// Requiring our models
var db = require("../models");

module.exports = function(app) {
  // app.get("/expert", function(req, res) {
  //   db.Expert.findAll({
  //     limit: 5,
  //     where: {
  //       userType: "Expert"
  //     }
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // app.get("/expert/:id/:gymId", function(req, res) {
  //   console.log("THIS IS MY REQ:" + req.params.gymId);
  //   db.Expert.findAll({
  //     limit: 5,
  //     where: {
  //       userType: "Expert",
  //       gym: req.params.gymId
  //     }
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });
  
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
};
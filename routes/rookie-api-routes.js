// Requiring our models
var db = require("../models");

module.exports = function(app) {

//   app.get("/rookie/:id/:gymId", function(req, res) {
//     console.log("THIS IS MY REQ:" + req.params.gymId);
//     db.Rookie.findAll({
//       where: {
//         userType: "Rookie",
//         gym: req.params.gymId
//       }
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

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
};
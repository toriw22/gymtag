module.exports = function(sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    userType: {
       type: DataTypes.STRING,
       allowNull: false
    },
    gym: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [1]
      }
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isNumeric: true,
      validate:{
      len: [5]
      }
    },
    month: {
      type: DataTypes.STRING,
      allowNull: false
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    am_pm: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
    return Member;
};
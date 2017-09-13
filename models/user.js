module.exports = function(sequelize, DataTypes) {
  var Members = sequelize.define("Members", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    userType: {
       type: DataTypes.STRING,
       allowNull: true
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gym: {
      type: DataTypes.STRING,
      allowNull: true
    },
    month: {
      type: DataTypes.STRING,
      allowNull: true
    },
    day: {
      type: DataTypes.STRING,
      allowNull: true
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true
    },
    am_pm: {
      type: DataTypes.STRING,
      allowNull: true
    }
}, {
      timestamps: true    
  });
    return Members;
};
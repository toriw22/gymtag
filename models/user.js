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
}, {
      timestamps: false    
  });
    return Member;
};
module.exports = function(sequelize, DataTypes) {
  var Rookie = sequelize.define("Rookie", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
    }
  }, {
      timestamps: false    
  });

    return Rookie;
};
module.exports = function(sequelize, DataTypes) {
  var Expert = sequelize.define("Expert", {
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
      allowNull: false
    }
  }, {
      timestamps: false    
  });

    return Expert;
};
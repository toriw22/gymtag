module.exports = function(sequelize, DataTypes) {
    var Expert = sequelize.define("Expert", {
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
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
        allowNull: false
      }
    }, {
        timestamps: false    
    });
  
      return Expert;
  };
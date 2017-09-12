module.exports = function(sequelize, DataTypes) {
    var Members = sequelize.define("Table", {
    id: {
        type: DataTypes.INTERGER,
        autoIncrement: true,
        primaryKey: true,
        min: 1000
        },
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
      type: {
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
    return Members;
  };
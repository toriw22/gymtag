module.exports = function(sequelize, DataTypes) {
    var Table = sequelize.define("Table", {
    id: {
        type: DataTypes.INTERGER,
        autoIncrement: true,
        primaryKey: true
        },
      name: {
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
        len: [1]
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      month: {
        type: DataTypes.STRING,
        allowNull: false
      },
      day: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false
      },
      am_pm: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Table;
  };
module.exports = function(sequelize, DataTypes) {
  var Appointments = sequelize.define("Appointments", {
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

  Appointments.associate = function(models) {
    models.Rookie.belongsToMany(models.Expert, { through: Appointments } );
    models.Expert.belongsToMany(models.Rookie, { through: Appointments } );
  };

    return Appointments;
};
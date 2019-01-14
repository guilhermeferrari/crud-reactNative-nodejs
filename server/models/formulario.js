'use strict';
module.exports = (sequelize, DataTypes) => {
  const Formulario = sequelize.define('Formulario', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {});
  Formulario.associate = function(models) {
    // associations can be defined here
  };
  return Formulario;
};
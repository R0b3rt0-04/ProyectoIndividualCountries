const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
      validate: {
        max: 3,
      },
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flagsvg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continents: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    timeZones: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    independent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    unMember: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    landlocked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    latlng: {
      type: DataTypes.ARRAY(DataTypes.FLOAT),
      allowNull: false,
    },
    languages: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{timestamps: false}
  );
};
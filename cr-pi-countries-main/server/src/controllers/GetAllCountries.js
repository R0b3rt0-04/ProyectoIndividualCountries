
const {Country,Activity} = require('../db');

const getAllCountries = () =>  Country.findAll({ include: Activity });

module.exports = getAllCountries;

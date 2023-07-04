const {Country} = require('../db');
const getAllCountries = require('./GetAllCountries');


const getCountryByName = async (name) => {

    if (name.length <= 2) return false

    const countrydetail = await Country.findAll();
    countryfiltered = countrydetail.filter(e => e.name.toLowerCase().includes(name.toLowerCase())) 
    
    return countryfiltered.length > 0 ? countryfiltered : false ;

};

module.exports = getCountryByName;
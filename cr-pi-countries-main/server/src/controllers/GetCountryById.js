const {Country, Activity} = require('../db');

const getCountryById = async (id) => {
    
    const countrydetail = await Country.findByPk(id, { include: Activity });

    return countrydetail 

};

module.exports = getCountryById;
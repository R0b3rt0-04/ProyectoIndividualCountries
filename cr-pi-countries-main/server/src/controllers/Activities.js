const {Activity, Country} = require('../db')

const activities = async () => {

    try {
        
        const result = await Activity.findAll({
            include: Country
          });
          
        return result

    } catch (error) {
        
        throw new Error('erro al obtener actividades')
    }

}

module.exports = activities;
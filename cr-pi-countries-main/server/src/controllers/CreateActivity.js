const { Activity, Country } = require('../db');

const createActivity = async (name, difficulty, duration, season, country) => {
  console.log(name, difficulty, duration, season, country);
  if (!name || !difficulty || !duration || !season || !country) {
    throw new Error('Es necesario llenar todos los campos');
  } else {
    try {
      const existingActivity = await Activity.findOne({ where: { name } });
      const theCountry = await Country.findOne({ where: { name: country } });

      if (existingActivity) {
        if (theCountry) {
          await existingActivity.addCountry(theCountry);
          return existingActivity;
        }else{
          throw new Error('No se encontró el país correspondiente');
        }
      } else {
        const newActivity = await Activity.create({
          name,
          difficulty,
          duration,
          season,
        });

        if (!theCountry) {
          throw new Error('No se encontró el país correspondiente');
        }

        await newActivity.addCountry(theCountry);
        return newActivity;
      }
    } catch (error) {
      console.log(error);
      throw new Error('Error al crear actividad');
    }
  }
};

module.exports = createActivity;

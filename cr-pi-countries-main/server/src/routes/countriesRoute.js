const express = require('express');
const getAllCountries = require('../controllers/GetAllCountries');
const getCountryByName = require('../controllers/GetCountryByName');
const getCountryById = require('../controllers/GetCountryById');
const countriesRoute = express.Router();


countriesRoute.get('/',async (req, res) => {
    const name = req.query.name;
    
    if (name) { //send country by name
       const byname = await getCountryByName(name)
        
          if (byname) {
            console.log('enviando detalle')
            res.send(byname);
          } else {
            res.status(404).send('No se encontró ningún país con ese nombre');
          }

    } else { //send all countries
      const allpaises = await getAllCountries()
      res.send(allpaises)
      console.log('enviando todos los pises')
    }
}); 


countriesRoute.get('/:idPais', async (req, res) => {
  const idPais = req.params.idPais;
  const byId = await getCountryById(idPais)
  if (byId) {
        console.log('enviando detalle por id')
        res.send(byId);
      } else {
        res.status(404).send('No se encontró ningún país con ese id');
      }
});


module.exports = countriesRoute;

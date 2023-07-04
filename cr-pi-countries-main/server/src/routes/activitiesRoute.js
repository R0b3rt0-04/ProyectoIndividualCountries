const express = require('express')
const activities = require('../controllers/Activities')
const createActivity = require('../controllers/CreateActivity')


const activitiesRoute = express.Router()



activitiesRoute.get('/', async (req, res)=>{
    let response = await activities()
    if (response) {
        res.send(response)
    } else {
        res.status(404).send('fallaron las actividades');
    }
})



activitiesRoute.post('/', async (req, res) => {
    const { name, difficulty, duration, season, country } = req.body;
  
    try {
      const newActivity = await createActivity(name, difficulty, duration, season, country);
      res.send(newActivity); // Enviar la actividad creada como respuesta al cliente
    } catch (error) {
      res.status(500).json({ error: error }); // Enviar el mensaje de error en caso de fallo
    }
  });


module.exports = activitiesRoute;
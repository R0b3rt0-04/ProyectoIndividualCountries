const { Router } = require("express");
const activitiesRoute = require('./activitiesRoute');
const countriesRoute = require("./countriesRoute");


const router = Router();
router.use('/countries', countriesRoute)
router.use('/activities', activitiesRoute)
 
module.exports = router;

const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const PORT = 3001;

//["name","tld","cca2","ccn3","cca3","cioc","independent","status","unMember",
//"currencies","idd","capital","altSpellings","region","subregion","languages","translations"
//,"latlng","landlocked","borders","area","demonyms","flag","maps","population",
//"gini","fifa","car","timezones","continents","flags","coatOfArms","startOfWeek",
//"capitalInfo","postalCode"]


conn.sync({ force: true })
.then(() => {
  server.listen(PORT, () => {console.log(`Server listening on port ${PORT}`);})
  
  axios.get('http://localhost:5000/countries')
  .then(({data}) => {
    let countriessss = []
    data.forEach(pais => {
      let newcountry = {
        id:pais.cca3,
        independent:pais.independent,
        unMember:pais.unMember,
        landlocked:pais.landlocked,
        name: pais.name.common,
        flags: pais.flags?.png,
        flagsvg: pais.flags?.svg,
        continents: pais.continents ,
        capital: Array.isArray(pais.capital) ? pais.capital[0] : 'Desconocido',
        subregion:pais.subregion ? pais.subregion :'Desconocido' ,
        area: pais.area,
        population: pais.population,
        timeZones: pais.timezones,
        latlng: pais.latlng, 
        languages: pais.languages ? Object.values(pais.languages) : [],
        code: pais.cca2+'-'+pais.ccn3
      };
      countriessss.push(newcountry)
    });
    Country.bulkCreate(countriessss)
    .then(()=>{console.log('Base de datos cargada con exito')})
    .catch((error)=>{
      console.log(error.message)
    })
  });


})

.catch(error => console.error(error))

import { GET_COUNTRIES, ORDER_COUNTRIES_ALPHABETICALLY, ORDER_COUNTRIES_POPULATION, ORDER_COUNTRIES_ACTIVITIES, PLAN_COUNTRIES, GET_ACTIVITIES, FILTER_ACTIVITIES, RESET_COUNTRIES } from './action-types'

let initialstate = {
    
    allCountries : [],
    countries:{},
    plan:[],
    favs:[],
    activities:[],
    climas:{continentes: {
        Africa: {calidos: {latitud: {min: -35,max: 37},longitud: {min: -18,max: 55}},frios: {latitud: {min: -40,max: 33},longitud: {min: -18,max: 55}},templados: {latitud: {min: -35,max: 37},longitud: {min: -18,max: 55}}},
        Americas: {calidos: {latitud: {min: -38,max: 36},longitud: {min: -173,max: -35}},frios: {latitud: {min: 38,max: 85},longitud: {min: -173,max: -35}},templados: {latitud: {min: -38,max: 85},longitud: {min: -173,max: -35}}},
        Asia: {calidos: {latitud: {min: -10,max: 50},longitud: {min: 24,max: 180}},frios: {latitud: {min: 51,max: 85},longitud: {min: 24,max: 180}},templados: {latitud: {min: -10,max: 85},longitud: {min: 24,max: 180}}},
        Europe: {calidos: {latitud: {min: 25,max: 71},longitud: {min: -33,max: 45}},frios: {latitud: {min: 48,max: 82},longitud: {min: -33,max: 45}},templados: {latitud: {min: 25,max: 82},longitud: {min: -33,max: 45}}},
        Oceania: {calidos: {latitud: {min: -45,max: 12},longitud: {min: 113,max: -180}},frios: {latitud: {min: -45,max: 0},longitud: {min: 113,max: -180}},templados: {latitud: {min: -45,max: 12},longitud: {min: 113,max: -180}}}
      }
    }, 
    languages:[],
    allCountriesnames:[],
    regions:[]


};

let reducer = (state = initialstate, action ) => {
switch (action.type) {
   
    /* ---------------------------------------------------------------------------------- */
    case GET_COUNTRIES:
      let languagesuniques = new Set()
      const regions = new Set()
      let names = []
      action.payload.forEach(pais => {
        pais.continents.forEach(continente => regions.add(continente))
        names.push(pais.name)
        if (pais.languages) {
          for (const key in pais.languages) {
            languagesuniques.add(pais.languages[key])
          }
        }
      });
      const segmentos = [];
      for (let i = 0; i < action.payload.length; i += 10) {
        const segmento = action.payload.slice(i, i + 10);
        segmentos.push(segmento);
      }
      let pages = {}
      segmentos.forEach((arrpaises, index) => {
        pages[index] = arrpaises
      });

      return {
      ...state,
       allCountries: [...action.payload],
       countries: pages, 
       allCountriesnames:names.sort(),
       languages:[...languagesuniques].sort(),
       regions:[...regions]
      }
    
    /* ---------------------------------------------------------------------------------- */
    case ORDER_COUNTRIES_ALPHABETICALLY:
      let paisesOrdenados = Object.values(state.countries).flat().sort((a, b) => a.name.charCodeAt() - b.name.charCodeAt())

      if (action.payload === 'falling') paisesOrdenados = paisesOrdenados.reverse()

      const segmentosALP = [];
      for (let i = 0; i < paisesOrdenados.length; i += 10) {
        const segmentoALP = paisesOrdenados.slice(i, i + 10);
        segmentosALP.push(segmentoALP);
      }
      let pagesALP = {}
      segmentosALP.forEach((arrpaises, index) => {
        pagesALP[index] = arrpaises
      });
      
      return{...state,
             countries: pagesALP
            }
    /* ---------------------------------------------------------------------------------- */
    case ORDER_COUNTRIES_POPULATION:
      let paisesOrdenados_POPULATION = Object.values(state.countries).flat().sort((a, b) => a.population - b.population)

      if (action.payload === 'falling') paisesOrdenados_POPULATION = paisesOrdenados_POPULATION.reverse()

      const segmentos_POPULATION = [];
      for (let i = 0; i < paisesOrdenados_POPULATION.length; i += 10) {
        const segmento_POPULATION = paisesOrdenados_POPULATION.slice(i, i + 10);
        segmentos_POPULATION.push(segmento_POPULATION);
      }
      let pages_POPULATION = {}
      segmentos_POPULATION.forEach((arrpaises, index) => {
        pages_POPULATION[index] = arrpaises
      });
      
      return{...state,
             countries: pages_POPULATION
            }
    /* ---------------------------------------------------------------------------------- */
    
    case GET_ACTIVITIES:
      return {...state,
              activities: action.payload
             } 
    /* ---------------------------------------------------------------------------------- */
        

    case FILTER_ACTIVITIES:
           
    let paisesOrdenados_ACTIVITIES = state.activities.find(e => e.name === action.payload).Countries

    const segmentos_ACTIVITIES = [];
    for (let i = 0; i < paisesOrdenados_ACTIVITIES.length; i += 10) {
      const segmento_ACTIVITIES = paisesOrdenados_ACTIVITIES.slice(i, i + 10);
      segmentos_ACTIVITIES.push(segmento_ACTIVITIES);
    }
    let pages_ACTIVITIES = {}
    segmentos_ACTIVITIES.forEach((arrpaises, index) => {
      pages_ACTIVITIES[index] = arrpaises
    });

      return {...state,
          countries: pages_ACTIVITIES
      }             

    case RESET_COUNTRIES:
      
    const segmentos_RESET = [];
    for (let i = 0; i < state.allCountries.length; i += 10) {
      const segmento_RESET = state.allCountries.slice(i, i + 10);
      segmentos_RESET.push(segmento_RESET);
    }
    let pages_RESET = {}
    segmentos_RESET.forEach((arrpaises, index) => {
      pages_RESET[index] = arrpaises
    });

    
    return {
        ...state,
        countries:pages_RESET
      }




    default:
    return {...state}

}
}

export default reducer;
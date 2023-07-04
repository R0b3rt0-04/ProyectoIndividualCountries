import { GET_COUNTRIES, ORDER_COUNTRIES_ALPHABETICALLY, ORDER_COUNTRIES_POPULATION, ORDER_COUNTRIES_ACTIVITIES, PLAN_COUNTRIES, GET_ACTIVITIES, FILTER_ACTIVITIES, RESET_COUNTRIES } from './action-types'

export const getCountries = () => {
    return function(dispatch){
        fetch('http://localhost:3001/countries/')
      .then((response) => response.json())
      .then((data) => dispatch({type: GET_COUNTRIES, payload: data}))
    }
}

export const orderAlpabet = (up_fall) => {
  return {type: ORDER_COUNTRIES_ALPHABETICALLY, payload: up_fall}
}

export const orderPopulation = (up_fall) => {
  return {type: ORDER_COUNTRIES_POPULATION, payload: up_fall}
}

export const getActivities = () => {
  return function(dispatch){
    fetch('http://localhost:3001/activities/')
  .then((response) => response.json())
  .then((data) => dispatch({type: GET_ACTIVITIES, payload: data}))
  }
}

export const filterActivities = (str) => {
  return {type: FILTER_ACTIVITIES, payload: str}
}

export const resetcountries = () => {
  return {type: RESET_COUNTRIES}
}
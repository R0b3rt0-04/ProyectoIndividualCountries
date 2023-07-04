 
import React from 'react'
import style from './Activity.module.css'

const Activity = ({ac}) => {
  return (
    <div className={style.Activity}>
      <h2>{ac.name}</h2>
      <p>{ac.duration} minutos</p>
      <p>{ac.difficulty}</p>
      <p>{ac.Countries.map(e => e = e.name).join(', ')}</p>
    </div>
  )
}

export default Activity
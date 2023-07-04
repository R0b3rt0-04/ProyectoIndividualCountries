import React from 'react'
import style from './CountryMini.module.css'
const CountryMini = (props) => {
  return (
    <div className={style.CountryMini}>
        <p>{props.value}</p>
        <button onClick={()=>{props.fx(props.value)}}>✕</button>
    </div>
  )
}

export default CountryMini
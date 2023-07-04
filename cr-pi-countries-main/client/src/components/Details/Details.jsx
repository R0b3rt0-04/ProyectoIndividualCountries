 
import React, { useEffect, useState } from 'react'
import style from './Details.module.css'

const Details = (props) => {

  const [detailsInfo, setDetailsInfo] = useState(false)

useEffect(() => {
  fetch(`http://localhost:3001/countries/${props.name}`)
  .then((response) => response.json())
  .then((data) => setDetailsInfo(data))
  .catch((e)=>{props.close()})
}, [])


  return (
    <div className={style.DetailsContanier}>
      {
        detailsInfo && 
        <div className={style.DetailsContanierCenter}>
          <button className={style.closebutton} onClick={() => {props.close()}}>Ⅹ</button>
          <p><b>Identificación: <i>{detailsInfo.id}</i></b></p>
          <h2>{detailsInfo.name}</h2>
          <p>{detailsInfo.name} es un país ubicado en {detailsInfo.continents.length > 1 ? 'los continentes' : 'el continente'} {detailsInfo.continents.join(', ')}. Su capital es {detailsInfo.capital}, una ciudad situada en el territorio de {detailsInfo.name}.</p>
          <p>Con una población aproximada de {detailsInfo.population.toLocaleString()} habitantes, {detailsInfo.name} abarca un territorio de {detailsInfo.area.toLocaleString()} kilómetros cuadrados y se extiende a través de {detailsInfo.timeZones.length} {detailsInfo.timeZones.length > 1 ? 'zonas horarias' : 'zona horaria'}: {detailsInfo.timeZones.join(', ')}.</p>
          <p>Es importante destacar que {detailsInfo.name} {detailsInfo.independent ? 'es un país independiente' : 'no es un país independiente'} y {detailsInfo.unMember ? 'forma parte' : 'no forma parte'} de la Organización de las Naciones Unidas (ONU). Además, el país {detailsInfo.landlocked ? 'no tiene acceso' : 'cuenta con acceso'} al mar.</p>
          <p>{detailsInfo.languages.length > 1 ? 'Los idiomas oficiales hablados en el país son' : 'El idioma oficial hablado en el país es'} el {detailsInfo.languages.join(', ')}.</p>
          {detailsInfo.Activities.length > 0 && <p>Activities: {detailsInfo.Activities.map(e => (<span key={e.name}> {e.name} </span>))}</p>}
          <div className={style.flagcontanier}>
              <div className={style.flg} style={{backgroundImage: `url(${detailsInfo.flagsvg})`}}/>
          </div>
        </div>
      }
    </div>
  )
}

export default Details
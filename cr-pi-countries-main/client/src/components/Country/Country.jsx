import React, { useEffect, useState } from 'react'
import style from './Country.module.css'
import moment from 'moment';

const Country = ({pais, index, open}) => {
  if(!pais) return (<div className={style.Country}></div>)
  
  const [time, setTime] = useState(generarHoraZonaHoraria(pais.timeZones ? pais.timeZones[0] : 'cancel' ))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(generarHoraZonaHoraria(pais.timeZones ? pais.timeZones[0] : 'cancel' ));
    }, 20000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function generarHoraZonaHoraria(zonaHoraria) {
    if(zonaHoraria === 'cancel') return;
  const horaActual = moment().utcOffset(zonaHoraria);

  const formatoHora = 'HH:mm z-Z';
  const horaFormateada = horaActual.format(formatoHora);

  return horaFormateada;

  }
console.log()
  return (
    <div onClick={()=>{open(pais.id)}} className={style.Country} style={{animationDelay: `${index * 100}ms`, marginTop: index === 0 ? '1rem' : ''}}>
      <div className={style.CYflag} style={{backgroundImage:`url(${pais.flags})`}}></div>
      <p>{pais.name}</p>
      <p>{pais.subregion}</p>
      <p>{pais.code}</p>
      <p>{time}</p>
      <div className={style.CYindicators}>
        <span style={{color: pais.independent ? 'green' : 'red'}}>●</span> 
        <span style={{color: pais.unMember ? 'yellowgreen' : '#fddb00'}}>◉</span>
        <span style={{color: !pais.landlocked ? 'blue' : 'orange'}}>◀</span>
      </div>

    </div>
  )
}

export default Country
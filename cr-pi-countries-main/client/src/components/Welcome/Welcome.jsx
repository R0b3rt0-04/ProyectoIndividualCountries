 
import React, { useEffect } from 'react'
import style from './Welcome.module.css'
import NavBar from '../NavBar/NavBar'
import car from '/say-wha-free-gap-year-up-for-grabs-5-1511159910.png'
import air from '/descarga.jpg'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()

  return (
    <div className={style.Welcome}>
      <header className={style.header}>
        <h1 className={style.webname}>Nameweb</h1>
        <div className={style.containernav}>
        <NavBar/>
        </div>
        <img className={style.iconnav} src="" alt="Icon relasioated"  style={{visibility:'hidden'}}/>
      </header>
      <section className={style.bodyWelcome}>
        <div className={style.bodycontainer1}>
          <span className={`${style.textlarge} ${style.textaside}`}>Explore</span>
          <span className={style.textlarge} style={{display:'block'}}>The World</span>
          <div className={style.contentimages}>
              <div className={style.contentimagescontainer1}>
                <img className={style.imagebody1} src={air} alt="imagen 1" />
              </div>
              <div className={style.contentimagescontainer2}>
                <img className={style.imagebody2} src={car} alt="imagen 2" />
              </div>
          </div>
        <div className={style.socialmedia}>
            <span className={style.smFB}>F<span className={style.smSec}>ace</span>B<span className={style.smSec}>ook</span></span>
            <span className={style.smIG}>I<span className={style.smSec}>nsta</span>G<span className={style.smSec}>ram</span></span>
            <span className={style.smTW}><span>T</span><span>W</span><span className={style.smSec}>itter</span></span>
            <span className={style.smIN}><span className={style.smSec}>L</span>IN<span className={style.smSec}>KEDIN</span></span>
            <span className={style.smYT}>Y<span className={style.smSec}>ou</span>T<span className={style.smSec}>ube</span></span>
        </div>
        </div>
      </section>
      <footer className={style.footer}>
        <div className={style.fcontainer1}>
          <h3>Vacation tips</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quae numquam rerum excepturi nesciunt minima quia vel ullam repellendus a, explicabo tempore assumenda optio dolorum eum accusamus temporibus praesentium quas?</p>
        </div>
        <button className={style.createpalnbtn} onClick={()=>{navigate('/Create/Plan')}}>Plan a trip</button>
        <p className={style.decoration}><b>01</b> <span style={{letterSpacing:'-2px'}}>-------------------------------</span> <b>05</b></p>
      </footer>
    </div>
  )
}

export default Welcome
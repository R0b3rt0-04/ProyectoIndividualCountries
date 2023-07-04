 
import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import NavBar from '../NavBar/NavBar'
import { useSelector } from 'react-redux'
import Country from '../Country/Country'
import Details from '../Details/Details'


const Home = () => {

  const paises = useSelector(state => state.allCountries)
  const languages = useSelector(state => state.languages)
  const regions = useSelector(state => state.regions)
  const climasRage = useSelector(state => state.climas)
  const climas = ['calidos' ,'frios' ,'templados']
  
  const [viewdetails, setViewdetails] = useState({visible:false, name:''})
  const deploydetails = (aname) => setViewdetails({visible:true, name:`${aname}`})
  const closedetails = () => setViewdetails({visible:false, name:''}) 
  
  const [selectedChars, setSelectedChars] = useState({Language:'Language', region:'region', clima: 'clima', search:false});
  const handleLanguageChange = (event) => setSelectedChars({...selectedChars, [event.target.name] : event.target.value, search:false});
  
  const climaselectorbool = (region, latlngarr ) => {
    if (selectedChars.region === '' || selectedChars.region === 'region') return true
    if (!latlngarr) return false 
    if (region === '' || region === 'region') return true
    
    let lat = latlngarr[0]
    let lon = latlngarr[1]

    let minlat = climasRage.continentes[region][selectedChars.clima].latitud.min
    let maxlat = climasRage.continentes[region][selectedChars.clima].latitud.max
    let minlon = climasRage.continentes[region][selectedChars.clima].longitud.min
    let maxlon = climasRage.continentes[region][selectedChars.clima].longitud.max

    return ((lat <= maxlat && lat >= minlat)&&(lon <= maxlon && lon >= minlon)) 
  } 

  const languageselectorfx = (objlang, indicator) => {
    if(indicator === 'Language' || indicator === '') return true
    try{
      return Object.values(objlang).includes(indicator)  
    }
    catch(e){
      return false
    }
  }
  
  return (
    <div className={style.Home}>
        <div className={style.HomeContainer}>
        <div className={style.containerNav}>
          <div className={style.containerNav222}>
            <NavBar/>
          </div>
        </div>
        <section className={style.HomeBody}>
        {
          viewdetails.visible && <Details key={'details'} name={viewdetails.name} close={closedetails}/>
        }
          <p className={style.HomeTitle}>Let's find your ideal place.</p>
        <section className={style.Selectors}>
            <div className={style.SelectorsContainer}>
                <div>
                  <select className={style.slector} name="Language" value={selectedChars.Language} onChange={handleLanguageChange}>
                    {/*<--------------------language-------------------------->*/}
                    <option value="">Language</option>
                    {
                      languages.map(language =>{
                        return (
                          <option value={language} key={language} >▶{language}</option>
                        )
                      })
                    }
                  </select>
                  <p className={style.slectorDescription}>como quieres hablar</p>
                </div>
                  {/*<--------------------region-------------------------->*/}
                <div>
                  <select className={style.slector} name="region" value={selectedChars.region} onChange={handleLanguageChange}>
                    <option value="">region</option>
                    {
                      regions.map(region =>{
                        return (
                          <option value={region} key={region} >▢{region}</option>
                        )
                      })
                    }
                  </select>
                  <p className={style.slectorDescription}>where are you going</p>
                </div>
                  {/*<-----------------------clima----------------------->*/}
                <div>
                  <select className={style.slector} disabled={/* selectedChars.region === 'region' || selectedChars.region === '' ? true : false */ true} name="clima" value={selectedChars.clima} onChange={handleLanguageChange}>
                    <option value="">clima</option>
                    {
                      climas.map(clima =>{
                        return (
                          <option value={clima} key={clima} >●{clima}</option>
                        )
                      })
                    }
                  </select>
                  <p className={style.slectorDescription}>que clima prefieres?</p>
                </div>
                <button className={style.btnselec} onClick={()=>{setSelectedChars({...selectedChars, search: true})}}>Expore now</button>
            </div>
        </section>
          <div className={style.Optiosn}>
                  { selectedChars.search &&
                    paises.filter(e => (languageselectorfx(e.languages, selectedChars.Language)) && (selectedChars.region !== '' && selectedChars.region !== 'region'? e.continents.includes(selectedChars.region)  : true) && (selectedChars.clima !== '' && selectedChars.clima !== 'clima' ? climaselectorbool(e.region, e.latlng) : true)).map((ed, index) => {
                      return (
                        
                            <Country key={ed.name+'paishome'} pais={ed} open={deploydetails} index={index}/>
                        
                        )
                      })
                  }
          </div>
        </section>
        </div>
        <div className={style.bg}/>
        
    </div>
  )
}

export default Home
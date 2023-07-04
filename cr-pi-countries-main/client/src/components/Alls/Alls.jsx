 
import React, { useState } from 'react'
import style from './Alls.module.css'
import NavBar from '../NavBar/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import Country from '../Country/Country'
import Details from '../Details/Details'
import { filterActivities, orderAlpabet, orderPopulation, resetcountries } from '../../Redux/actions'


const Alls = () => {

  const dispatch = useDispatch()
  const activities = useSelector(state => state.activities)
  const allCountriesnames = useSelector(state => state.allCountriesnames)
  const countries = useSelector(state => state.allCountries)
  const pages = useSelector(state => state.countries)

  const handleSelectorAlfabethChange = (event) => dispatch(orderAlpabet(event.target.value))
  const handleSelectorPopulationChange = (event) => dispatch(orderPopulation(event.target.value))
  const handleSelectorActivitiesChange = (event) => {
    if (event.target.value === '') {
      dispatch(resetcountries())
    } else {
      dispatch(filterActivities(event.target.value))
    }
  }

  const [pagevisible, setPagevisible] = useState('0')

    
  const [viewdetails, setViewdetails] = useState({visible:false, name:''})
  const deploydetails = (aname) => setViewdetails({visible:true, name:`${aname}`})
  const closedetails = () => setViewdetails({visible:false, name:''}) 

  const [search, setSearch] = useState('');
  const handleChange = (event) => setSearch(event.target.value);

  const searchDestailsCountry = () => {
    let id = countries.find(e => e.name === search)?.id
    if(!id) return
    deploydetails(id)
  }

  return (
    <div className={style.AllsContainer}>
      <nav className={style.navcontainer}>
        <NavBar/>
      </nav>
      <section className={style.Bodydestinations}>
        <div className={style.selectors}>
          <div>
            <p>Alfabeth</p>
            <select name="Alfabeth" onChange={handleSelectorAlfabethChange}>
              <option value=""></option>
              <option value="upward">upward</option>
              <option value="falling">falling</option>
            </select>
          </div>
          <div>
            <p>Population</p>
            <select name="Population" onChange={handleSelectorPopulationChange} >
              <option value=""></option>
              <option value="upward">upward</option>
              <option value="falling">falling</option>
            </select>
          </div>
            {
          activities.length > 0 &&
          <div>
            <p>Activities</p>
            <select name="Activities" onChange={handleSelectorActivitiesChange}>
              <option value=""></option>
              {
                activities.map((e, index) => {
                  return (
                    <option key={e+index} value={e.name}>{e.name}</option>
                  )
                })
              }
            </select>
          </div>

            }
          <div>
          <input type="text" list="paises" value={search} onChange={handleChange} />
            <datalist id="paises">
              {
              allCountriesnames.map((name, index)=>{
                return (
                  <option key={index+name} value={name} />
                )
              })
              }
            </datalist>
            <button onClick={searchDestailsCountry} disabled={search === '' ? true : false}>Search</button>
          </div>
        </div>
        <div className={style.containerCyPb}>
        {
          viewdetails.visible && <Details key={'details'} name={viewdetails.name} close={closedetails}/>
        }
           <div className={style.pagecotainer}>
            {
            pages[pagevisible]?.map((paise,index)=>{
              return (
                <Country key={paise.name} pais={paise} open={deploydetails} index={index}/>
              )
            })
            }
           </div>
           <div className={style.btnscotainer}>
            {
              Object.keys(pages).map((num)=>{
                return (
                  <button key={'btn'+num} onClick={()=>{setPagevisible(num)}} style={{backgroundColor: pagevisible === num ? 'grey' : '', transform: pagevisible === num ? 'scale(1.1)' : ''}}>{Number(num)+1}</button>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Alls
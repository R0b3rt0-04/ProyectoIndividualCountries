 
import React, { useState } from 'react'
import style from './Plan.module.css'
import NavBar  from '../NavBar/NavBar'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import location from '/location.png'
import { getActivities } from '../../Redux/actions';
import CountryMini from '../CountryMini/CountryMini';
import Activity from '../Activity/Activity';

const Plan = () => {


  const activities = useSelector(state => state.activities)
  const allCountriesnames = useSelector(state => state.allCountriesnames)
  const dispatch =useDispatch()
  
  
  const [form,setForm]=useState({name:"",difficulty:0,duration:0,season:""});
  const changeHandler=(event)=>{
      const property = event.target.name;
      const value = event.target.value;
      setForm({...form, [property]:value})
  }

  
  const [search, setSearch] = useState({on:'', alls:[]}) 
  const handleChange = (event) => setSearch({on: event.target.value, alls:[...search.alls]});
  const deletesearch = (str) => {
    setSearch({on:'', alls:search.alls.filter(e => e !== str)})
  }
  const searchaddfx = () => {
    if (search.alls.includes(search.on) || !allCountriesnames.includes(search.on)){
      setSearch({on: '', alls: [...search.alls]})
      return
    }
    setSearch({on: '', alls: [ search.on,...search.alls]})
  }

  
  
  const submitHandler = (event) => {
    event.preventDefault();
    
    if (form.name !== '' && form.name.split('').filter(e => e !== ' ').length > 1 && Number(form.difficulty) > 0 && Number(form.difficulty) <= 5 && form.duration > 0 && form.season !== ''){
      
      const promises = search.alls.map((id) =>
        axios.post("http://localhost:3001/activities", { ...form, country: id })
      );
      Promise.all(promises)
      .then((results) => {
          alert(promises.length > 1 ? 'Actividades creadas correctamente' : "la actividad se creo exitosamente")
          dispatch(getActivities())
      })
      .catch((error) => {
        alert('ocurrió un error al crear actividades, Verifique y reintente')
      });

    }
  };
  
  return (
    <div className={style.Plan}>
      <div className={style.ContanierP}>
        <nav className={style.navContainer}>
        <NavBar/>
        </nav>
        <h1 className={style.h1bnplan}>Let's create a plan</h1>
        <div className={style.planBody}>
          <div className={style.PLANbodycontanier1}>

          <div className={style.searchCoyntrbar}>
            <img src={location} className={style.iconUI}/>
          <input className={style.searchCoyntrbarINPUT} type="text" list="paises" value={search.on} placeholder='        Input a location...' onChange={handleChange} />
            <datalist id="paises">
              {
              allCountriesnames.map((name, index)=>{
                return (
                  <option key={index+name} value={name} />
                )
              })
              }
            </datalist>
            <button className={style.btnazul} onClick={()=>{searchaddfx()}}>Add country</button>
          </div>
          <div className={style.containerseleccions}>
            {
              search.alls.map(e => (<CountryMini key={e} value={e} fx={deletesearch}/>) )
            }
          </div>
{/*----------------------------------------------------------------------------------------------------------------------*/}
<form onSubmit={submitHandler}>
  <div className={style.searchCoyntrbar} style={{display:'flex',alignItems:'center',flexFlow:'column nowrap'}}>
    <label>Name</label>
    <input type="text" value={form.name} name="name" onChange={changeHandler} />
  </div>
  <div className={style.searchCoyntrbar}>
      <label>Difficulty</label>
      <select value={form.difficulty} name="difficulty" onChange={changeHandler}>
        <option value="">Select difficulty</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
  </div>
  <div className={style.searchCoyntrbar}>
    <label>Duration</label>
    <input type="number" value={form.duration} name="duration" onChange={changeHandler} />
  </div>
  <div className={style.searchCoyntrbar}>
    <label>Season:</label>
    <select value={form.season} name="season" onChange={changeHandler}>
      <option value="">Select Season</option>
      <option value="Verano">Verano</option>
      <option value="Invierno">Invierno</option>
      <option value="Primavera">Primavera</option>
      <option value="Otoño">Otoño</option>
    </select>
  </div>

  <button type="submit" disabled={search.alls.length < 1 || form.name === '' || form.name.split('').filter(e => e !== ' ').length < 1 || form.difficulty <= 0 || form.difficulty > 5 || form.duration < 0 || form.season === ''}>Create Activity</button>
</form>
{/*----------------------------------------------------------------------------------------------------------------------*/}
          </div>
          <div className={style.PLANbodycontanier2}>
              {
                activities.map(e => (<Activity key={e.name} ac={e}/>))
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plan
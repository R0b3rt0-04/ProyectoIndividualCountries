import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Alls from './components/Alls/Alls'
import Home from './components/Home/Home'
import Plan from './components/Plan/Plan' 
import ErrorP from './components/ErrorP/ErrorP' 
import Welcome from './components/Welcome/Welcome'
import { useDispatch } from 'react-redux'
import { getActivities, getCountries } from './Redux/actions'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities())
  }, [])
  
  

  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Navigate to={'/Welcome'}/>}/>
      <Route path='/Welcome' element={<Welcome/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/View/all/destinations' element={<Alls/>}/>
      <Route path='/Create/Plan' element={<Plan/>} />
      <Route path='*' element={<Navigate to={'/Page-error'} />}/>
      <Route path='/Page-error' element={<ErrorP/>} />
    </Routes>
    </div>
  )
}

export default App

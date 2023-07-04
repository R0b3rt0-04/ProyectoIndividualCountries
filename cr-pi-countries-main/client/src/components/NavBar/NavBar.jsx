
import React from 'react'
import style from './NavBar.module.css'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <nav className={style.NavBar}>
      <ul className={style.ul}>
        <li onClick={()=>{navigate('/')}}>↩</li>
        <li onClick={()=>{navigate('/Home')}}>Home</li>
        <li onClick={()=>{navigate('/View/all/destinations')}}>Destinations</li>
        <li><a href="https://rhv-earthly-project.netlify.app/" target="_blank" rel="Map Online">View map</a></li>
        <li onClick={()=>{navigate('/Create/Plan')}}>Create Plan</li>
        <li><a href="https://roberto-hernandez-portfolio.netlify.app/" target="_blank" rel="About me">About me</a></li>
      </ul>
    </nav>
  )
}

export default NavBar
import React from 'react'
import { Link } from 'react-router-dom'
import "./WatchersPage.scss"


function WatchersPage() {

  return (<>
  <h2>Elige tu reloj</h2>
  <div className='links'>
    <Link to="/watchers/reloj">Reloj</Link> 
    <Link to="/watchers/cuentaAtras">Cuenta Atras</Link>
    <Link to="/watchers/cronometro">Cronometro</Link> 
  </div>
    </>)
}

export default WatchersPage
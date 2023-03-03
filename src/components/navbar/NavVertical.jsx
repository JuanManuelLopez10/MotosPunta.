import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import BarraOpciones from './BarraOpciones'
import Botonmenu from './Botonmenu'
import CartWidget from './CartWidget'


const NavVertical = () => {
  const usarcont = useContext(CartContext)
  if (usarcont.scrorientation==="portrait") {
    return (
      <>
      <nav id="header" className="container-fluid d-flex justify-content-around fixed-top animate__animated animate__fadeInDown">

      <div className='col-12 d-flex justify-content-around' id='header-principal'>
          <Link className='col-3 botones' to='/'>
              <img src="../assets/logos/logo_motos_punta_favicon.png" alt="Motos Punta" className='col-12'/>
          </Link>
          <Botonmenu/>
          <BarraOpciones/>
      </div>
      </nav>
      <div className='cartwid'>
        <CartWidget/>          
      </div>
      </>
    )
  }else{
    return (
      <nav id="header" className="container-fluid d-flex justify-content-around fixed-top animate__animated animate__fadeInDown">
      <div className='col-12 d-flex justify-content-between p-1' id='header-principal'>
            <Botonmenu/>
          <Link className='col-1 botones' to='/'>
              <img src="../assets/logos/logo_motos_punta_favicon.png" alt="Motos Punta" className='col-12'/>
          </Link>
            <CartWidget/>          
          <BarraOpciones/>
          
      </div>
      </nav>
    )
  }

}

export default NavVertical
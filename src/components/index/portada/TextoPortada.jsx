import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../CartContext'
import 'animate.css';


const TextoPortada = () => {
  const usarcont = useContext(CartContext)
  if(usarcont.scrorientation==='portrait'){
    return(
    <div className='portada-texto h-25 d-flex flex-column align-items-center justify-content-center col-12 animate__animated animate__fadeInUp' >
    <h2 className='color-white'>MT Revenge Replica</h2>
    <Link className='opcionclase' to={`/item/mtkrepedroacosta`}>Ver más</Link>
  </div>
  )
  }else{
  return (
          <div className='portada-texto h-25 m-0 d-flex flex-column align-items-center justify-content-center col-12 animate__animated animate__fadeInUp' >
            <h2 className='color-white'>MT KRE+ Pedro Acosta</h2>
            <Link className='opcionclase' to={`/item/mtkrepedroacosta`}>Ver más</Link>
          </div>
      )
  }
}

export default TextoPortada
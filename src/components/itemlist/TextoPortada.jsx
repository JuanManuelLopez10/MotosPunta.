import React from 'react'
import { useContext } from 'react'
import 'animate.css';
import { CartContext } from '../CartContext';


const TextoPortada = (props) => {
  const usarcont = useContext(CartContext)
  if(usarcont.scrorientation==='portrait'){
    return(
    <div className='portada-texto h-25 d-flex flex-column align-items-center justify-content-center col-12' >
      <h1>{props.idCat}</h1>
  </div>
  )
  }else{
  return (
          <div className='portada-texto h-25 m-0 d-flex flex-column align-items-center justify-content-center col-12' >
            <h1>{props.idCat}</h1>
          </div>
      )
  }
}

export default TextoPortada
import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import ImagenPortada from './ImagenPortada';
import TextoPortada from './TextoPortada';

const Portada = () => {
  const usarcont = useContext(CartContext)
  if(usarcont.scrorientation==='portrait'){
    return (
      <div className='d-flex portada flex-nowrap justify-content-center align-items-end'>
          <TextoPortada/>
          <ImagenPortada/>
      </div>
    )
  }else{
    return (
      <div className='d-flex portada flex-nowrap'>
          <ImagenPortada/>
          <TextoPortada/>
      </div>
    )
  }
}

export default Portada
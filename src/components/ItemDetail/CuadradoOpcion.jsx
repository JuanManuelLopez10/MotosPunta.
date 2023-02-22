import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

const CuadradoOpcion = (props) => {
  const usarcont = useContext(CartContext)

    let descripci
    if(props.titulo==="Precio"){
        descripci = "U$S " + props.descripcion
    }else{
        descripci = props.descripcion
    }
    if(usarcont.scrorientation==='portrait'){
      return (
        <div className='cuadradoopcion m-2 col-12 p-2'>
            <p className='cuadradoopciontitulo'>{props.titulo}</p>
            <p className='cuadradoopciondescripcion'>{descripci}</p>
        </div>
      )
    }else{
      return (
        <div className='cuadradoopcion m-2 col-2 p-2 h-50'>
            <p className='cuadradoopciontitulo'>{props.titulo}</p>
            <p className='cuadradoopciondescripcion'>{descripci}</p>
        </div>
      )
    }

}

export default CuadradoOpcion
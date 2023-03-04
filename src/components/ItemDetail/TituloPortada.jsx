import React from 'react'

const TituloPortada = (props) => {
  return (
    <div className='position-absolute col-12 p-2 bottom-0 tituloportada'>
        <h1 className='col-8'>{props.titulo}</h1>
    </div>
  )
}

export default TituloPortada
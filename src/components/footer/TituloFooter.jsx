import React from 'react'
import { Link } from 'react-router-dom'

const TituloFooter = (props) => {
  return (
    <Link to={`/clase/${props.nombre}`} className='text-center titulofooter opcionclase'>{props.nombre}</Link>
    )
}

export default TituloFooter
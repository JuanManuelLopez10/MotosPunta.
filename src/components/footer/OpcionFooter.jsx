import React from 'react'
import { Link } from 'react-router-dom'

const OpcionFooter = (props) => {
  return (
    <Link to={`/category/${props.titulo}`} className='opcionclase opcionfooter col-5 text-center'>{props.titulo}</Link>
  )
}

export default OpcionFooter
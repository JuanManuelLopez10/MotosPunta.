import React from 'react'
import { Link } from 'react-router-dom'

const Opcionsecundaria = (props) => {
  return (
    <Link className='opcionclase' to={`/category/${props.nombre}`}>{props.nombre}</Link>
  )
}

export default Opcionsecundaria
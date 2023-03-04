import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'

const OpcionFooter = (props) => {
  const usarcontext = useContext(CartContext)
  const onclic = () => {
    usarcontext.desseleccionarfooter()
    usarcontext.ahoradescargado()
  }
  return (
    <Link onClick={()=>{onclic()}} to={`/category/${props.titulo}`} className='opcionclase opcionfooter col-5 text-center'>{props.titulo}</Link>
  )
}

export default OpcionFooter
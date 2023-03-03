import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'

const BotonFooter = (props) => {
    const usarcontext = useContext(CartContext)
    const seleccionar = (a) =>{
        usarcontext.seleccionarfooter(a)
    }
    const desseleccionar = () =>{
        usarcontext.desseleccionarfooter()
    }
    if (usarcontext.selectedfooter!==props.titulo){
        return (
            <Link className='opcionfooter' onClick={() => {seleccionar(props.titulo)}}>{props.titulo}  <i className="bi bi-chevron-compact-down"></i></Link>
          )
    }else{
        return (
            <Link className='opcionfooter' onClick={() => {desseleccionar()}}>{props.titulo} <i className="bi bi-chevron-compact-up"></i></Link>
          )
    }
}

export default BotonFooter
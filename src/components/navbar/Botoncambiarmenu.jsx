import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext'

const Botoncambiarmenu = ({opcion}) => {
    const usarcont = useContext(CartContext)
    const ventanabierta = (a) => {
        usarcont.abrirproductos(a)
      }
  return (
    <button className='bg-none color-white opcionclase' onClick={() => {ventanabierta(`${opcion}`)}}>{opcion}</button>
  )
}

export default Botoncambiarmenu
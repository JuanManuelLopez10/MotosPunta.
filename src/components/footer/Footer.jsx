import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import ListaFooter from './ListaFooter'

const Footer = () => {
  const usecontext = useContext(CartContext)
  console.log("el use context es " + usecontext.scrorientation);
  const motos = ["Polleritas", "Scooters", "Calle", "Naked", "Touring", "Custom"]
  const cascos = ["Integrales", "Rebatibles", "Abiertos", "Cross", "Multiproposito", "Accesorios"]
  const indumentaria = ["Camperas", "Antiparras", "Guantes", "Mochilas", "Pantalones", "Botas"]
  const accesorios = ["Baules", "Alforjas", "Valijas laterales", "Mochilas", "Trancas", "Cubiertas", "Aceites y lubricantes"]
  const empresa = ["Marcas", "Contacto", "Ubicación", "Services", "Consultar crédito", "Catálogo"]
  
  if (usecontext.scrorientation === "landscape"){
  return (
    <footer id='footer' className='bg-black d-flex justify-content-around'>
        <ListaFooter titulo="Motos" array={motos}/>
        <ListaFooter titulo="Cascos" array={cascos}/>
        <ListaFooter titulo="Indumentaria" array={indumentaria}/>
        <ListaFooter titulo="Accesorios" array={accesorios}/>
        <ListaFooter titulo="Empresa" array={empresa}/>
    </footer>
  )
} else {
  return (
    <footer id='footer' className='bg-black d-flex flex-column p-2'>
        <ListaFooter titulo="Motos" array={motos}/>
        <ListaFooter titulo="Cascos" array={cascos}/>
        <ListaFooter titulo="Indumentaria" array={indumentaria}/>
        <ListaFooter titulo="Accesorios" array={accesorios}/>
        <ListaFooter titulo="Empresa" array={empresa}/>
    </footer>
  )
}
}
export default Footer
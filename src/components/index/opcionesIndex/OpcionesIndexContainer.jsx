import React from 'react'
import OpcionesIndex from './OpcionesIndex'

const OpcionesIndexContainer = () => {
  const motos = ["Cubs", "Scooter", "Calle", "Naked", "Touring", "Custom"]
  const cascos = ["Integrales", "Rebatibles", "Abiertos", "Cross", "Multiproposito", "Accesorios"]
  const indumentaria = ["Camperas", "Antiparras", "Guantes", "Mochilas", "Pantalones", "Botas"]
  const accesorios = ["Baules", "Alforjas", "Valijas laterales", "Mochilas", "Trancas", "Cubiertas", "Aceites y lubricantes"]

  return (
    <div className='d-flex flex-wrap col-12'>
        <OpcionesIndex principal={"motos"} secundario={motos}/>
        <OpcionesIndex principal={"cascos"} secundario={cascos}/>
        <OpcionesIndex principal={"indumentaria"} secundario={indumentaria}/>
        <OpcionesIndex principal={"accesorios"} secundario={accesorios}/>
    </div>
  )
}

export default OpcionesIndexContainer
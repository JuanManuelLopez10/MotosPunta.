import React from 'react'
import OpcionFooter from './OpcionFooter'
import TituloFooter from './TituloFooter'

const MotoFooter = () => {
    const motos = ["Polleritas", "Scooters", "Calle", "Naked", "Touring", "Custom"]

    return (
    <div className='col-2 d-flex flex-column align-items-center'>
        <TituloFooter nombre={"Motos"}/>
        {
            motos.map(item => <OpcionFooter key={item} titulo={item}/>)
        }
    </div>
  )
}

export default MotoFooter
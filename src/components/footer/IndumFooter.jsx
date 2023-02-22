import React from 'react'
import OpcionFooter from './OpcionFooter'
import TituloFooter from './TituloFooter'

const IndumFooter = () => {
    const indumentaria = ["Camperas", "Antiparras", "Guantes", "Mochilas", "Pantalones", "Botas"]
    
    return (
        <div className='col-2 d-flex flex-column align-items-center'>
        <TituloFooter nombre={"Indumentaria"}/>
            {
                indumentaria.map(item => <OpcionFooter key={item} titulo={item}/>)
            }
        </div>
    )
}

export default IndumFooter
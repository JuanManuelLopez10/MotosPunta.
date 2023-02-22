import React from 'react'
import OpcionFooter from './OpcionFooter'
import TituloFooter from './TituloFooter'

const AccesFooter = () => {
    const accesorios = ["Baules", "Alforjas", "Valijas laterales", "Mochilas", "Trancas", "Cubiertas", "Aceites y lubricantes"]
    
    return (
        <div className='col-2 d-flex flex-column align-items-center'>
        <TituloFooter nombre={"Accesorios"}/>
            {
                accesorios.map(item => <OpcionFooter key={item} titulo={item}/>)
            }
        </div>
    )
}

export default AccesFooter
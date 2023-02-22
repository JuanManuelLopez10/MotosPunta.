import React from 'react'
import OpcionFooter from './OpcionFooter'
import TituloFooter from './TituloFooter'

const CascosFooter = () => {
    const cascos = ["Integrales", "Rebatibles", "Abiertos", "Cross", "Multiproposito", "Accesorios"]
    
    return (
        <div className='col-2 d-flex flex-column align-items-center'>
        <TituloFooter nombre={"Cascos"}/>
            {
                cascos.map(item => <OpcionFooter key={item} titulo={item}/>)
            }
        </div>
    )
}

export default CascosFooter
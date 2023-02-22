import React from 'react'
import OpcionFooter from './OpcionFooter'
import TituloFooter from './TituloFooter'

const EmpresaFooter = () => {
    const empresa = ["Marcas", "Contacto", "Ubicación", "Services", "Consultar crédito", "Catálogo"]
    
    return (
        <div className='col-2 d-flex flex-column align-items-center'>
        <TituloFooter nombre={"Empresa"}/>
            {
                empresa.map(item => <OpcionFooter key={item} titulo={item}/>)
            }
        </div>
    )
}

export default EmpresaFooter
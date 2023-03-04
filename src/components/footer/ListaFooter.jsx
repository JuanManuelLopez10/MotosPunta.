import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext'
import BotonFooter from './BotonFooter'
import MenuFooter from './MenuFooter'
import OpcionFooter from './OpcionFooter'
import TituloFooter from './TituloFooter'


const ListaFooter = (props) => {
    const usarcontext = useContext(CartContext)

    if(usarcontext.scrorientation === "landscape"){
        return (
            <div className='col-2 d-flex flex-column align-items-center'>
                <TituloFooter nombre={props.titulo}/>
                {
                    props.array.map(item => <OpcionFooter key={item} titulo={item}/>)
                }
            </div>  )
    } else{
        return(
            <>
            <div className='d-flex flex-column'>
            <BotonFooter titulo={props.titulo}/>
            <MenuFooter titulo={props.titulo} array={props.array}/>
            </div>
            </>
            )
    }

}

export default ListaFooter
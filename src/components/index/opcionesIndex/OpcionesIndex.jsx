import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../CartContext'
import MenuOpcion from './MenuOpcion'
import ImagenOpcion from './ImagenOpcion'


const OpcionesIndex = (props) => {
    const usarcont = useContext(CartContext)

    const cambiarOn = (a) => {

        usarcont.abrirseleccionaropcionIndex(a)
    }
    const cerrarOn = () => {
        usarcont.cerrarseleccionaropcionIndex()
    }
    
    if(usarcont.scrorientation==='portrait'){
        return (
            <>
            <Link className='opcionindex col-12' onMouseOver={() => {cambiarOn(props.principal)}} to={`/clase/${props.principal}`}>
                <img className='col-12' src={`./assets/categorias_index/${props.principal}.png`} alt={props.principal}/>
            </Link>
            </>
          )        
    }else{
        return (
            <>
            <button className='col-6 p-0 d-flex' id={props.principal} onMouseOver={() => {cambiarOn(props.principal)}} onMouseLeave={() => {cerrarOn()}} to={`/clase/${props.principal}`}>
                <ImagenOpcion principal={props.principal}/>
                <MenuOpcion key={props.principal} clase={props.principal} secundario={props.secundario}/> 
            </button>
            </>
        )     
    }
}

export default OpcionesIndex
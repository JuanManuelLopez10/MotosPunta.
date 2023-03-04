import React from 'react'
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
            <button className='opcionindexvertical col-12 d-flex' style={{backgroundImage: `url(/assets/categorias_index/${props.principal}.png)`, backgroundSize: "cover"}} id={props.principal} onClick={() => {cambiarOn(props.principal)}}  to={`/clase/${props.principal}`}>
                <MenuOpcion key={props.principal} clase={props.principal} secundario={props.secundario}/> 
            </button>
            </>
          )        
    }else{
        return (
            <>
            <button className='col-6 p-0 d-flex opcionindex' style={{backgroundImage: `url(/assets/categorias_index/${props.principal}.png)`, backgroundSize: "cover"}} id={props.principal} onMouseOver={() => {cambiarOn(props.principal)}} onMouseLeave={() => {cerrarOn()}} to={`/clase/${props.principal}`}>
                <MenuOpcion key={props.principal} clase={props.principal} secundario={props.secundario}/> 
            </button>
            </>
        )     
    }
}

export default OpcionesIndex
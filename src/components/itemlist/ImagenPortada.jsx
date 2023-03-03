import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext'


const ImagenPortada = (props) => {
    const usarcont = useContext(CartContext)
    if(usarcont.scrorientation==='portrait'){
    return (
        <div id='Portada_Video' className='col-12'>
            <img className='col-12' src={props.wallpapervertical} alt="Portada" />
        </div>
        )
    }else{
        return(
            <div id='Portada_Video' className='col-12'>
            <img className='col-12' src={props.wallpaperhorizontal} alt="Portada" />
        </div>        )
    }
}

export default ImagenPortada
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../CartContext'

const ImagenPortada = () => {

    const usarcont = useContext(CartContext)
    if(usarcont.scrorientation==='portrait'){
    return (
        <div id='Portada_Video' className='col-12'>
            <video id='portada_Video' autoPlay muted loop className='col-12' src='./assets/wallpapers/wallpaper-vertical.mp4'>
            </video>
        </div>
        )
    }else{
        return(
            <img src="https://iili.io/HW9yk3N.jpg" alt="MT" className='col-12'/>
        )
    }
}

export default ImagenPortada
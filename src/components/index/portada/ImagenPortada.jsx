import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../CartContext'

const ImagenPortada = () => {

    const usarcont = useContext(CartContext)
    if(usarcont.scrorientation==='portrait'){
    return (
            <img src="https://iili.io/HWnpSTb.jpg" alt="MT" className='col-12' />
        )
    }else{
        return(
            <img src="https://iili.io/HWnD9dg.jpg" alt="MT" className='col-12'/>
        )
    }
}

export default ImagenPortada
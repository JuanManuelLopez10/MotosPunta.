import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import TextoPortada from './TextoPortada'
import TituloPortada from './TituloPortada'

const Wallpaper = ({item}) => {
  const usarcont = useContext(CartContext)
    
  if(usarcont.scrorientation==='portrait'){
    return (
      <div className='col-12 d-flex flex-nowrap port'>
              <img className="imagenwallpaper col-12" src={item.wallpapervertical} alt="logo" />
              <TextoPortada item={item}/> 
              <TituloPortada titulo={item.nombre}/>
      </div>
    )
  }else{
    return (
      <div className='col-12 d-flex flex-nowrap'>
              <img className="imagenwallpaper" src={item.wallpaperhorizontal} alt="logo" />
              <TextoPortada item={item}/>
      </div>
    )
  }

}

export default Wallpaper


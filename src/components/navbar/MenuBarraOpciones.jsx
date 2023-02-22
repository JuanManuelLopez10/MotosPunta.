import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import 'animate.css';
import Botoncambiarmenu from './Botoncambiarmenu';
import LinkAOpcion from './LinkAOpcion';

const MenuBarraOpciones = () => {
    const usarcont = useContext(CartContext)

    if(usarcont.abiertoproductos===false){
        return (
                <div className='h-75 col-9 d-flex flex-column justify-content-around'>
                  <Botoncambiarmenu opcion={"Productos"}/>
                    <button className='bg-none color-white opcionclase'>Empresa</button>
                    <button className='bg-none color-white opcionclase'>Contacto</button>
                    <button className='bg-none color-white opcionclase'>Marcas</button>
                </div>
          )
    } else if(usarcont.abiertoono===true && usarcont.abiertoproductos==="Productos"){
        return(
                <div className='h-75 col-9 d-flex flex-column justify-content-around animate__animated animate__fadeInLeft'>
                    <Botoncambiarmenu opcion={"Motos"}/>
                    <Botoncambiarmenu opcion={"Cascos"}/>
                    <Botoncambiarmenu opcion={"Indumentaria"}/>
                    <Botoncambiarmenu opcion={"Accesorios"}/>
                </div>
        )
    } else if(usarcont.abiertoono===true && usarcont.abiertoproductos==="Motos"){
        console.log(usarcont.abiertoproductos);
        return(
                <div className='h-75 col-9 d-flex flex-column justify-content-around animate__animated animate__fadeInLeft'>
                <LinkAOpcion opcion={"Polleritas"}/>
                <LinkAOpcion opcion={"Scooters"}/>
                <LinkAOpcion opcion={"Calle"}/>
                <LinkAOpcion opcion={"Naked"}/>
                <LinkAOpcion opcion={"Touring"}/>
                <LinkAOpcion opcion={"Custom"}/>
                </div>
        )
    } else if(usarcont.abiertoono===true && usarcont.abiertoproductos==="Cascos"){
      console.log(usarcont.abiertoproductos);
      return(
              <div className='h-75 col-9 d-flex flex-column justify-content-around animate__animated animate__fadeInLeft'>
                <LinkAOpcion opcion={"Integrales"}/>
                <LinkAOpcion opcion={"Rebatibles"}/>
                <LinkAOpcion opcion={"Abiertos"}/>
                <LinkAOpcion opcion={"Cross"}/>
                <LinkAOpcion opcion={"Multipropósito"}/>
                <LinkAOpcion opcion={"Accesorios"}/>
              </div>
      )
  } else if(usarcont.abiertoono===true && usarcont.abiertoproductos==="Indumentaria"){
    console.log(usarcont.abiertoproductos);
    return(
            <div className='h-75 col-9 d-flex flex-column justify-content-around animate__animated animate__fadeInLeft'>
              <LinkAOpcion opcion={"Camperas"}/>
              <LinkAOpcion opcion={"Antiparras"}/>
              <LinkAOpcion opcion={"Guantes"}/>
              <LinkAOpcion opcion={"Mochilas"}/>
              <LinkAOpcion opcion={"Pantalones"}/>
              <LinkAOpcion opcion={"Botas"}/>
            </div>
    )
} else if(usarcont.abiertoono===true && usarcont.abiertoproductos==="Accesorios"){
  console.log(usarcont.abiertoproductos);
  return(
          <div className='h-75 col-9 d-flex flex-column justify-content-around animate__animated animate__fadeInLeft'>
            <LinkAOpcion opcion={"Baules"}/>
            <LinkAOpcion opcion={"Alforjas"}/>
            <LinkAOpcion opcion={"Valijas laterales"}/>
            <LinkAOpcion opcion={"Mochilas"}/>
            <LinkAOpcion opcion={"Trancas"}/>
            <LinkAOpcion opcion={"Cubiertas"}/>
            <LinkAOpcion opcion={"Cubiertas"}/>
            <LinkAOpcion opcion={"Aceites y lubricantes"}/>
          </div>
  )
}

}

export default MenuBarraOpciones
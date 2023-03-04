import React, { useContext, useState } from 'react'
import 'animate.css';
import { CartContext } from '../CartContext'
const Cargando = () => {

    const usarcont = useContext(CartContext)
    
    function resolveAfter2Seconds() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(usarcont.ahoracargado());
          }, 3500);
        });
      }
      async function asyncCalld() { 
        const result = await resolveAfter2Seconds();
      }
      asyncCalld()
      

    if (usarcont.cargado===false) {
        return (
            <div className='cargando d-flex justify-content-center align-items-center'>
                <h1 className='animate__animated animate__pulse'>CARGANDO</h1>
            </div>
          )
    }else{
      console.log("a");
    }

    
}

export default Cargando;
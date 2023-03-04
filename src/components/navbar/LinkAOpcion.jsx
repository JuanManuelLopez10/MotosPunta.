import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'

const LinkAOpcion = ({opcion}) => {
    const usarcont = useContext(CartContext)
    
    async function resolveAfter1Seconds() {
      usarcont.ahoradescargado()
      if (usarcont.scrorientation==="portrait") {
        const barraopciones = document.getElementById('navbar')
        barraopciones.setAttribute('class', 'col-12 barraopciones d-flex flex-column align-items-center justify-content-center fixed-top animate__animated animate__fadeOutLeft')
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve(usarcont.cerrarmenu), 400)
        });
      
        let result = await promise; // espera hasta que la promesa se resuelva (*)
      
        usarcont.cerrarmenu()
      }else{
        const barraopciones = document.getElementById('barraopciones')
        barraopciones.setAttribute('class', 'col-3 barraopciones d-flex flex-column align-items-center justify-content-center fixed-top animate__animated animate__fadeOutLeft')
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve(usarcont.cerrarmenu), 400)
        });
      
        let result = await promise; // espera hasta que la promesa se resuelva (*)
      
        usarcont.cerrarmenu()

      }
      }
    return (
        <Link to={`/category/${opcion}`} className='bg-none color-white opcionclase animate__animated animate__fadeInLeft' onClick={resolveAfter1Seconds}>{opcion}</Link>
    )
}

export default LinkAOpcion
import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import 'animate.css';

const Botonmenu = () => {
    const usarcont = useContext(CartContext)

    async function resolveAfter1Seconds() {
      if (usarcont.scrorientation==="portrait") {
        const barraopciones = document.getElementById('navbar')
        barraopciones.setAttribute('class', 'col-12 barraopciones d-flex flex-column align-items-center justify-content-center fixed-top animate__animated animate__fadeOutLeft')
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve(usarcont.cerrarmenu), 400)
        });
      
        let result = await promise; // espera hasta que la promesa se resuelva (*)
        console.log(result);
        usarcont.cerrarmenu()
      }else{
        const barraopciones = document.getElementById('navbar')
        barraopciones.setAttribute('class', 'col-3 barraopciones d-flex flex-column align-items-center justify-content-center fixed-top animate__animated animate__fadeOutLeft')
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve(usarcont.cerrarmenu), 400)
        });
      
        let result = await promise; // espera hasta que la promesa se resuelva (*)
        console.log(result);
        usarcont.cerrarmenu()

      }
      }
      if (usarcont.abiertoono===false) {
        return (
            <>
            <button onClick={usarcont.agregarmenu} className='botones bg-none color-white col-1'><i class="bi bi-list"></i></button>
            </>
          )        
      }else{
        return (
            <>
            <button onClick={resolveAfter1Seconds} className='botones bg-none color-white col-1'>x</button>
            </>
          )  
      }
}

export default Botonmenu
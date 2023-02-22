import React from 'react'
import 'animate.css';
import MenuBarraOpciones from './MenuBarraOpciones';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const BarraOpciones = () => {
    const usarcont = useContext(CartContext)
    if(usarcont.abiertoono===true && usarcont.scrorientation==='portrait'){
    return(
        <div id='navbar' className='col-12 barraopciones d-flex flex-column align-items-center justify-content-center fixed-top animate__animated animate__fadeInLeft'>                    
            <MenuBarraOpciones/>
        </div>
    )
    }else if(usarcont.abiertoono===true && usarcont.scrorientation==='landscape'){
        return(
            <div id='navbar' className='col-3 barraopciones d-flex flex-column align-items-center justify-content-center fixed-top animate__animated animate__fadeInLeft'>                    
                <MenuBarraOpciones/>
            </div>
        )
    }
}

export default BarraOpciones
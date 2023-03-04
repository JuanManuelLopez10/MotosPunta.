import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import 'animate.css';
import OpcionFooter from './OpcionFooter';

const MenuFooter = (props) => {
    const usarcontext = useContext(CartContext)
    const selec = (a) => {
        usarcontext.seleccionarfooter(a)
    }
    if (usarcontext.selectedfooter === props.titulo) {
        return (
            <>
                <div>
                {
                    props.array.map(item => <OpcionFooter key={item} titulo={item}/>)
                }
                </div>
            </>
        )
    } 

}

export default MenuFooter
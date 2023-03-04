import React from 'react'
import { useContext } from 'react'
import 'animate.css';
import Opcionsecundaria from './Opcionsecundaria';
import { CartContext } from '../../CartContext';

const MenuOpcion = (props) => {
    const usarcont = useContext(CartContext)
    const aaa = props.clase

    if (props.clase===usarcont.seleccionaropcionIndex) {
        if (usarcont.scrorientation==="landscape"){
        return(
            <div className='MenuOpcion opcionclase position-absolute m-0 p-0 d-flex justify-content-center col-6 animate__animated animate__fadeIn'>
                <div className='col-8 d-flex flex-column'>
                    <h1>{aaa.toUpperCase()}</h1>
                    <div className='MenuOpcion2 d-flex flex-column flex-wrap'>
                    {
                    props.secundario.map(item => <Opcionsecundaria nombre={item}/>)
                    }
                    </div>
                </div>
            </div>
        )}else{
            return(
                <div className='MenuOpcion opcionclase position-absolute m-0 d-flex justify-content-center col-12 animate__animated animate__fadeIn'>
                    <div className='col-8 d-flex flex-column'>
                        <h1>{aaa.toUpperCase()}</h1>
                        <div className='MenuOpcion2 d-flex flex-column flex-wrap'>
                        {
                        props.secundario.map(item => <Opcionsecundaria nombre={item}/>)
                        }
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default MenuOpcion
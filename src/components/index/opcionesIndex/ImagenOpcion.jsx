import React from 'react'
import 'animate.css';

const ImagenOpcion = (props) => {
        return (
        <div className='h-100'>
            <img className='col-12 h-100' src={`./assets/categorias_index/${props.principal}.png`} alt={props.principal}/>
        </div>
        )

}

export default ImagenOpcion
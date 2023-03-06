import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../CartContext'
import 'animate.css';
import CuadradoOpcion from './CuadradoOpcion';



const TextoPortada = ({item}) => {
  const usarcont = useContext(CartContext)

  const { addToCart, calcpreciototal, calccanttotal, getHistorialseleccionado, productosseleccionados } = useContext(CartContext)
  const aa = () => {
  addToCart(item)
  calcpreciototal(item.precio, item.cantidad)
  calccanttotal(item.cantidad, item.id)
  }

  
  const restar = () => {
      let itemcantidad = document.getElementById('itemcantidad')
      if (item.cantidad>=2) {
          item.cantidad--
          itemcantidad.innerText= "Cantidad: " + item.cantidad
      }
  }
  const sumar = () => {
      if (item.cantidad < item.stock) {
          let itemcantidad = document.getElementById('itemcantidad')
          item.cantidad++
          itemcantidad.innerText= "Cantidad: " + item.cantidad
      }
     
  }


  let opcion1 = item.opcion1
  let descripcion1 = item.descripcion1
  let opcion2 = item.opcion2
  let descripcion2 = item.descripcion2
  let opcion3 = "Precio"
  let descripcion3 = item.precio

  
  if(usarcont.scrorientation==='portrait'){
    return(
    <div className='portada-textoitem d-flex flex-column align-items-center justify-content-end col-3 animate__animated animate__fadeInLeft' >
            <CuadradoOpcion titulo={opcion1} descripcion={descripcion1}/>
            <CuadradoOpcion titulo={opcion2} descripcion={descripcion2}/>
            <CuadradoOpcion titulo={opcion3} descripcion={descripcion3}/>
  </div>
  )
  }else{
  return (
          <div className='portada-texto h-50 m-0 d-flex align-items-end justify-content-end col-12 animate__animated animate__fadeInUp' >
            <div className='col h-100 d-flex flex-column align-items-start justify-content-around p-3'>
              <h1 className='tituloitemdetail'>{item.nombre}</h1>
              <button id='botonagregar' onClick={aa}>Agregar al carrito</button>

            </div>
            <CuadradoOpcion titulo={opcion1} descripcion={descripcion1}/>
            <CuadradoOpcion titulo={opcion2} descripcion={descripcion2}/>
            <CuadradoOpcion titulo={opcion3} descripcion={descripcion3}/>
          </div>
      )
  }
}

export default TextoPortada
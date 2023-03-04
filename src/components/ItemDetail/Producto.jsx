import React from 'react'
import { useContext } from "react"
import { CartContext } from "../CartContext"

const Producto = ({item}) => {
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
  return (
    <div className="col-12 d-flex flex-wrap justify-content-around">
    <div className="imagenproducto d-flex align-items-center">
        <img className="col-12" src={item.foto} alt="" />
    </div>
    <div className="col-5 d-flex flex-column justify-content-around">
        <h1 className="productonombre col-12">{item.nombre}</h1>
        <h3 className="productoprecio col-12">USD {item.precio}</h3> 
        <p className="productodescripcion">{item.descripcion}</p>
        <button id='botonagregar2' className='productodescripcion' onClick={aa}>Agregar al carrito</button>
        <h5 className="col-5">Stock: <span id="stockdisponible">{item.stock}</span></h5>
    </div>

</div>

  )
}

export default Producto
import React from 'react'
import { useState } from 'react'
import { useContext } from "react"
import { CartContext } from "../CartContext"

const Producto = ({item}) => {
    const { addToCart, calcpreciototal, calccanttotal, getHistorialseleccionado, productosseleccionados } = useContext(CartContext)
    const [TalleProducto, setTalleProducto] = useState(null)
    const aa = (a) => {
    console.log(item.talle);
    addToCart(item)
    calcpreciototal(item.precio, item.cantidad)
    calccanttotal(item.cantidad, item.id)
    }
    let talles = []
    if (item.talles) {
        for (let index = 0; index < item.talles.length; index++) {
            const element = item.talles[index];
            talles.push(element)
        }
    }
    const seleccionartalle = () => {

        setTalleProducto(document.getElementById('select').value)
        item.talle = TalleProducto
        console.log(item);
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
        {
        item.talles
        ?<select id='select' className='col-4 m-3' onChange={()=>{seleccionartalle()}}>
            {
                item.talles.map(element => <option value={element} onSelect={()=>{console.log(element);}}  key={element}>{element}</option>)
            }
        </select>
        :<h5 className="col-5 m-3">Stock: <span id="stockdisponible">{item.stock}</span></h5>

        }
        <button id='botonagregar2' className='productodescripcion m-3' onClick={aa}>Agregar al carrito</button>

    </div>

</div>

  )
}

export default Producto
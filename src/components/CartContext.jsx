import { useEffect } from "react";
import { createContext, useState } from "react";
import { db } from '../utils/firebaseConfig'
import { collection, getDocs, query, where } from "firebase/firestore"; 

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [Totalcompra, setTotalcompra] = useState(0)
    const [CantProductos, setCantProductos] = useState(0)
    const [scrorientation, setscrorientation] = useState()
    const [abiertoono, setabiertoono] = useState(false)
    const [abiertoproductos, setabiertoproductos] = useState(false)
    const [seleccionaropcionIndex, setseleccionaropcionIndex] = useState(false)
    const [productosseleccionados, setproductosseleccionados] = useState([])
    const [datos, setDatos] = useState([])
    const [seleccasco, setseleccasco] = useState(undefined)
    const [selecindum, setselecindum] = useState(undefined)
    const [selecacces, setselecacces] = useState(undefined)
    const [selectedfooter, setselectedfooter] = useState(null)

    useEffect(() => {
        const fetchFirestore = async() => {
            let q;
                q = query(collection(db, "productos"))
            const querySnapshot = await getDocs(q);
            const datosdeFirestore = querySnapshot.docs.map(item => ({
                id: item.id,
                ...item.data()
            }))
            return datosdeFirestore;
        }
        fetchFirestore()
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);

    const seleccionarfooter = (a) => {
        setselectedfooter(a)
    }
    const desseleccionarfooter = () => {
        setselectedfooter(null)
    }

    const getHistorialseleccionado = (producto) => {
        let historial = JSON.parse(localStorage.getItem('historial'))         //se llega al historial
        
        if (historial) {                                                          //qué pasa si hay historial
            let found = historial.find(product => product.id === producto.id)              //encontrar el articulo
            if (found) {                                                                   //qué pasa si se encuentra
                found.prioridad = found.prioridad + 1                                             //se suma 1 prioridad
                historial.sort(function(a, b){return (b.prioridad) - (a.prioridad)})         //ordenar historial por prioridad
                localStorage.setItem('historial', JSON.stringify(historial))                      //se genera nuevo historial
            }else{                                                                         //qué pasa si se encuentra
                historial.push(producto)                                                          //se agrega el producto al historial
                historial.sort(function(a, b){return (b.prioridad) - (a.prioridad)})         //ordenar historial por prioridad
                localStorage.setItem('historial', JSON.stringify(historial))                      //se genera nuevo historial
            }
        }else{                                                                    //qué pasa si no hay historial
            localStorage.setItem('historial', JSON.stringify([producto]))                     //se genera nuevo historial
            historial=[producto]    
        }

            historial.sort(function(a, b){return (b.prioridad) - (a.prioridad)})         //ordenar historial por prioridad
            const contadorcascos = []
            const contadorindum = []
            const contadoracces = []
            historial.map(item => {
                if(item.clase=='Cascos' && contadorcascos.length==0) {                     //si no hay definido un casco especial
                    contadorcascos.push(item)
                    setseleccasco(item)                                                  //se selecciona el primer casco
                }
                if(item.clase=='Indumentaria' && contadorindum===undefined) {
                    contadorindum.push(item)
                    setselecindum(item)         
                }
                if(item.clase=='Accesorios' && contadoracces===undefined) {
                    contadoracces.push(item)
                    setselecacces(item)         
                }
            }
            )
            const totales = [selecacces, seleccasco, selecindum]
            localStorage.setItem('totales', JSON.stringify(totales))                      //se genera nuevo historial

        }
        const primeroferta = (array) => {

            const historial = JSON.parse(localStorage.getItem('historial'))         //se llega al historial
            if (historial) {                                                        //si hay historial
                historial.map(item => {
                    if(item.clase=='Cascos' && seleccasco===undefined) {                     //si no hay definido un casco especial
                        setseleccasco(item)                                                  //se selecciona el primer casco
                    }
                    if(item.clase=='Indumentaria' && selecindum===undefined) {
                        setselecindum(item)         
                    }
                    if(item.clase=='Accesorios' && selecacces===undefined) {
                        setselecacces(item)         
                    }
                })    
            }                                                                //si no hay historial
                array.sort(function(a, b){return (b.prioridad) - (a.prioridad)})         //se ordena los productos

                array.map(item => {
                    if(item.clase=='Cascos' && seleccasco===undefined) {                //si no hay casco seleccionado
                        setseleccasco(item)
                    }
                    if(item.clase=='Indumentaria' && selecindum===undefined) {
                        console.log(item);
                        setselecindum(item)         
                    }
                    if(item.clase=='Accesorios' && selecacces===undefined) {
                        setselecacces(item)         
                    }
                })    

        }
    const crearseleccionados = () => {
        const totales = [selecacces, seleccasco, selecindum]
        localStorage.setItem('totales', JSON.stringify(totales))                      //se genera nuevo historial
    }


    const abrirseleccionaropcionIndex = (a) => {
        setseleccionaropcionIndex(a)
    }
    const cerrarseleccionaropcionIndex = () => {
        setseleccionaropcionIndex(false)
    }
    const agregarmenu = () => {
            if (abiertoono===false) {
            return setabiertoono(true)
        }
    }

    const cerrarmenu = () => {
        if (abiertoono===true) {
        setabiertoono(false)
        setabiertoproductos(false)
    }
    }
    
    const abrirmotos = () => {
        if (abiertoproductos===false){
            return setabiertoproductos("Motos")
        }
    }
    const abrircascos = () => {
        if (abiertoproductos===false){
            return setabiertoproductos("Cascos")
        }
    }
    const abririndumentaria = () => {
        if (abiertoproductos===false){
            return setabiertoproductos("Indumentaria")
        }
    }
    const abriraccesorios = () => {
        if (abiertoproductos===false){
            return setabiertoproductos("Accesorios")
        }
    }
    const abrirproductos = (x) => {
        const respuesta = x
        return setabiertoproductos(respuesta)

    }
    const getscrorient = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        if (width>height) {
            setscrorientation('landscape')
        }else{
            setscrorientation('portrait') 
        }
    }
    const cambiodeorient = (event) => {
        const ceroouno = event.target.screen.orientation.angle;
        if (ceroouno===0) {
            setscrorientation('portrait') 
        }else{
            setscrorientation('landscape') 
        }
    }
    window.onorientationchange = (event) => {
        const ceroouno = event.target.screen.orientation.angle;
        if (ceroouno===0) {
            setscrorientation('portrait') 
        }else{
            setscrorientation('landscape') 
        }
      };

    const calccanttotal = (cantidad) => {
        let contador = cantidad + CantProductos
        setCantProductos(contador);
    }
    const calcpreciototal = (precio, cantidad) => {
        let contador = precio * cantidad + Totalcompra
        setTotalcompra(contador);
    }
    const clear = () => {
        let nuevocarrito = []
        setCartList(nuevocarrito)
        setTotalcompra(0)
        setCantProductos(0)
    }
    const deleteItem = (id) => {
        let resultado = cartList.filter(item => item.id != id)
        let totalnuevo = 0
        let cantidadnuevo = 0
        resultado.map(item => totalnuevo += item.preciototal) 
        resultado.map(item => cantidadnuevo += item.cantidad) 
        setTotalcompra(totalnuevo)
        setCantProductos(cantidadnuevo)
        setCartList(resultado)

    }

    const addToCart = (item) => {

        let found = cartList.find(product => product.id === item.id)

        if (found === undefined){      
        setCartList([
            ...cartList,
            {
                id: item.id,
                clase: item.clase,
                category: item.category,
                abreviado: item.abreviado,
                nombre: item.nombre,
                color: item.color,
                precio: item.precio,
                foto: item.foto,
                cantidad: item.cantidad,
                preciototal: item.precio * item.cantidad
            }
            ])

    }else{
        found.cantidad = found.cantidad + item.cantidad
        found.preciototal = found.preciototal + item.precio * item.cantidad
        setCartList([...cartList])
    }

    }
    return(
    <CartContext.Provider value={{cartList, desseleccionarfooter, selectedfooter, seleccionarfooter, primeroferta, seleccasco, selecindum, selecacces, crearseleccionados, getHistorialseleccionado, productosseleccionados, datos, seleccionaropcionIndex, abrirseleccionaropcionIndex, cerrarseleccionaropcionIndex, abrirproductos, abrircascos, abrirmotos, abririndumentaria, abriraccesorios, abiertoproductos, cerrarmenu,agregarmenu, abiertoono, addToCart, calcpreciototal, deleteItem, Totalcompra, calccanttotal, CantProductos, clear, cambiodeorient, scrorientation, getscrorient}}>
        {children}
    </CartContext.Provider>
    )
}
export default CartContextProvider;
import React from 'react'
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from '../../utils/firebaseConfig'
import OpcionenForm from './OpcionenForm';


const CrearProductos = () => {
    
    const createOrder = () => {
        const producto = {
            cantidad: 1,
            category: document.getElementById("category").value,
            clase: document.getElementById("clase").value,
            color: document.getElementById("color").value,
            opcion1: document.getElementById("opcion1").value,
            descripcion1: document.getElementById("descripcion1").value,
            opcion2: document.getElementById("opcion2").value,
            descripcion2: document.getElementById("descripcion2").value,
            fotoopcion1: document.getElementById("fotoopcion1").value,
            tituloopcion1: document.getElementById("tituloopcion1").value,
            descripcionopcion1: document.getElementById("descripcionopcion1").value,

            fotoopcion2: document.getElementById("fotoopcion2").value,
            tituloopcion2: document.getElementById("tituloopcion2").value,
            descripcionopcion2: document.getElementById("descripcionopcion2").value,
            fotoopcion3: document.getElementById("fotoopcion3").value,
            tituloopcion3: document.getElementById("tituloopcion3").value,
            descripcionopcion3: document.getElementById("descripcionopcion3").value,
            foto: document.getElementById("foto").value,
            marca: document.getElementById("marca").value,
            nombre: document.getElementById("nombre").value,
            precio: parseInt(document.getElementById("precio").value),
            prioridad: parseInt(document.getElementById("prioridad").value),
            stock: parseInt(document.getElementById("stock").value),
            wallpapervertical: document.getElementById("wallpapervertical").value,
            wallpaperhorizontal: document.getElementById("wallpaperhorizontal").value,


        }
        const generarorder = async () => {
            const newOrderRef = doc(collection(db, "productos"))
            await setDoc(newOrderRef, producto);
            return newOrderRef
        }
        generarorder()
            .then(result => console.log(producto))
            .catch(err => console.log(err))
    }
            return(
                <>
                <section className='h-100 p-4 m-4'>
                    <h1>Subir al programa</h1>
                    <h2>ssss</h2>
                    <form action="">
                        <OpcionenForm opcion={"category"}/>
                        <OpcionenForm opcion={"clase"}/>
                        <OpcionenForm opcion={"color"}/>
                        <OpcionenForm opcion={"opcion1"}/>
                        <OpcionenForm opcion={"descripcion1"}/>
                        <OpcionenForm opcion={"opcion2"}/>
                        <OpcionenForm opcion={"descripcion2"}/>
                        <OpcionenForm opcion={"fotoopcion1"}/>
                        <OpcionenForm opcion={"tituloopcion1"}/>
                        <OpcionenForm opcion={"descripcionopcion1"}/>
                        <OpcionenForm opcion={"fotoopcion2"}/>
                        <OpcionenForm opcion={"tituloopcion2"}/>
                        <OpcionenForm opcion={"descripcionopcion2"}/>
                        <OpcionenForm opcion={"fotoopcion3"}/>
                        <OpcionenForm opcion={"tituloopcion3"}/>
                        <OpcionenForm opcion={"descripcionopcion3"}/>
                        <OpcionenForm opcion={"foto"}/>
                        <OpcionenForm opcion={"marca"}/>
                        <OpcionenForm opcion={"nombre"}/>
                        <OpcionenForm opcion={"precio"}/>
                        <OpcionenForm opcion={"prioridad"}/>
                        <OpcionenForm opcion={"stock"}/>
                        <OpcionenForm opcion={"wallpapervertical"}/>
                        <OpcionenForm opcion={"wallpaperhorizontal"}/>
                        <input type="reset" value="" onClick={() => {createOrder()}}/>
                    </form>
                    <button className='h-50' onClick={() => {createOrder()}}>Subir producto</button>
                </section>                

                </>
            )
    }


export default CrearProductos
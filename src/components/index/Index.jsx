import React from 'react'
import OpcionesIndexContainer from './opcionesIndex/OpcionesIndexContainer'
import Portada from './portada/Portada'
import { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore"; 
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import { db } from '../../utils/firebaseConfig';


const Index = () => {
  
  const [datos, setDatos] = useState([])
  const { primeroferta, crearseleccionados, seleccasco } = useContext(CartContext)
  const abrircont = (a) => {
    primeroferta(a)
    crearseleccionados()
  }
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
          .then(result => {setDatos(result)
          })
          .catch(err => console.log(err))

  }, []);
  
  if (datos ) {
    abrircont(datos)
    if (seleccasco) {
      return (
        <>
        <Portada/>
        <OpcionesIndexContainer/>
        </>
        )
    }

  }
  

}

export default Index
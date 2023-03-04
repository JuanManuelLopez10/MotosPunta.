import { useEffect, useState } from "react";
import ItemList from './ItemList'
import { useParams } from "react-router-dom";
import { db } from '../../utils/firebaseConfig'
import { collection, getDocs, query, where } from "firebase/firestore"; 
import PortIndex from "./PortadaIndex"
import Cargando from "../Cargando/Cargando";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    const { idCat } = useParams();
    const usarcontext = useContext(CartContext)
    const ahora = () => {
        usarcontext.ahoradescargado()
    }    
    useEffect(() => {
        const fetchFirestore = async() => {
            let q;
            if(idCat){
                q = query(collection(db, "productos"), where('category','==', idCat))
            }else{
                q = query(collection(db, "productos"))
            }
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
    }, [idCat]);

    const productoCero = datos[0]

    if (datos.length===0) {
        return(
            <>
                <Cargando/>
            </>
        )
    
    }else{
        return(
            <>
                <Cargando/>
                <PortIndex producto={productoCero} idCat={idCat}/>
                <ItemList datos={datos}/>
            </>
        )

    }
}

export default ItemListContainer;
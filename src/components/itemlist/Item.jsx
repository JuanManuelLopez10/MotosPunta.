import { Link } from "react-router-dom";
import { useContext } from "react"
import { CartContext } from "../CartContext";

const Item = ({props}) => {
    const { getHistorialseleccionado, crearseleccionados } = useContext(CartContext)
    const subiralhistorial = () => {
        getHistorialseleccionado(props)
        crearseleccionados()
    }
    return(
        <button onClick={() => {subiralhistorial(props)}} className="card col-3 p-0 col-lg-2 bg-white m-3 card-producto">
            <Link className="Card_producto h-100" to={`/item/${props.id}`}>
                <div className="card-body p-1 h-100 d-flex flex-column justify-content-between">
                    <h3 className="cardtitulo">{props.nombre}</h3>
                    <img src={props.foto} className="col-11 cardimagen" alt={props.nombre}/>
                    <p className="cardprecio">USD {props.precio}</p>
                </div>
            </Link>
        </button>
    )
}
export default Item;
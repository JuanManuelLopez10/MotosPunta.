import Producto from "./Producto"
import Wallpaper from "./Wallpaper"


const ItemDetail = ({item}) => {


    


    return(
        <>
        {
            <>
            <Wallpaper item={item}/>

            <div className="d-flex justify-content-start imagenopcion">
                <img className="col-6" src={item.fotoopcion1} alt="" />
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <h3 className="tituloopcion">{item.tituloopcion1}</h3>
                    <p className="col-10 descripcionopcion">{item.descripcionopcion1}</p>
                </div>
            </div>

            <div className="d-flex justify-content-start imagenopcion">
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <h3 className="tituloopcion">{item.tituloopcion2}</h3>
                    <p className="col-10 descripcionopcion">{item.descripcionopcion2}</p>
                </div>
                <img className="col-6" src={item.fotoopcion2} alt="" />
            </div>

            <div className="d-flex justify-content-start imagenopcion">
                <img className="col-6" src={item.fotoopcion3} alt="" />
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <h3 className="tituloopcion">{item.tituloopcion3}</h3>
                    <p className="col-10 descripcionopcion">{item.descripcionopcion3}</p>
                </div>
            </div>
            <Producto item={item}/>    
            </>
        }
        </>
    )
}

export default ItemDetail;
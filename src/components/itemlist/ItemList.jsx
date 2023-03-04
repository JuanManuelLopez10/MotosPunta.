import Item from "./Item";

const ItemList = (props) => {
    return(
        <>
        <div className="d-flex flex-wrap justify-content-around" id="itemList">
        {
        props.datos.map(item => <Item props={item}/>)
        }
        </div>
        </>
    )
}

export default ItemList;
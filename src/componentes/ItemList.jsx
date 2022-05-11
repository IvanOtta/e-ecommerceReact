import Item from "./Item";

function ItemList({ productos }) {
    return (
       <div className="itemList">
           {productos.map(prod => <Item key={prod.id} name={prod.name}  price={prod.price} image={prod.image}/>)}
       </div>
    )
}

export default ItemList
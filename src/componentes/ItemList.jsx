import Item from "./Item";
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemList({ products }) {
    return (
       <div className="itemList">
           {products.map(prod => <Item key={prod.id} id={prod.id} name={prod.name} price={prod.price} image={prod.image} stock= {prod.stock} />)}
       </div>
    )
}

export default ItemList
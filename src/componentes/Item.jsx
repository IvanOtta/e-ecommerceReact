import ItemCount from "./ItemCount"
import 'bootstrap/dist/css/bootstrap.min.css';




function Item({ name, price, image, stock }) {
    return (

        <div className="card-container">
            <div className="prod-card">
                <img className="prod-image" src={image} />
                <h2 className="prod-name"> {name} </h2>
                <div className="stock-container" >
                    <p>Stock del producto:  </p> <span> {stock} </span>
                </div>
                <h3 className="prod-price"> {price} </h3>
                <ItemCount stock={stock} initial={1} onAdd={(cantidad) => console.log(`${cantidad} Productos Agregados`)} />
            </div>
        </div>


    )
}

export default Item
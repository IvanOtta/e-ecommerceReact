import ItemCount from "./ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'

function Item({ name, image, stock, id }) {
  return (
      <div className="card-container ">
      <div className="prod-card ">
        <img className="prod-image" src={image} />
        <h2 className="prod-name"> {name} </h2>
        <div className="stock-container">
          <p>Stock del producto: </p> <span> {stock} </span>
        </div>
        {/* <h3 className="prod-price"> {price} </h3>
       <ItemCount stock={stock} initial={1} onAdd={(cantidad) => console.log(`${cantidad} Productos Agregados`)} /> */}
       <Link to= {`/detalle/${id}`} >
        <Button variant="outline-info">Ver Detalle</Button>{" "}
    </Link>
      </div>
    </div>
  );
}

export default Item;

// import ItemCount from "./ItemCount";
import { Button, Card } from "react-bootstrap"
import Item from "./Item"

export default function ItemDetail({producto}){ 
    return(
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {producto.image} />
  <Card.Body>
    <Card.Title className="detailName"> {producto.name} </Card.Title>
    <Card.Text className="detailPrice" >
        {producto.price}
    </Card.Text>
    <Button variant="danger col-11">Ver Producto</Button>
  </Card.Body>
</Card>
        </div>
    )
}



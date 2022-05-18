import ItemCount from "./ItemCount";
import { Button, Card } from "react-bootstrap";
import Item from "./Item";

// export default function ItemDetail({ producto }) {
//   return (
//     <div className="card-bs">
//       <Card  style={{ width: "18rem" }}>
//         <Card.Img variant="top" src={producto.image} />
//         <Card.Body>
//           <Card.Title className="detailName"> {producto.name} </Card.Title>
//           <Card.Text className="detailPrice">{producto.price}</Card.Text>
//           <ItemCount
//             stock={5}
//             initial={1}
//             onAdd={(cantidad) => console.log(`${cantidad} Productos Agregados`)}
//           />
//         </Card.Body>
//       </Card>
//     </div>
//   )
// }
export default function ItemDetail({ producto }) {
  return (
    <div className="itemDetailContainer">
      <div className="detailImage">
        <img src={producto.image} />
      </div>
      <div className="detailInfo">
        <h2> {producto.name} </h2>
        <p> {producto.price} </p>
        <ItemCount stock={5} initial={1} onAdd={(cantidad) => console.log(`${cantidad} Productos Agregados`)}/>
      </div>
    </div>
  );
}

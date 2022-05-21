import ItemCount from "./ItemCount";
import { Button, Card } from "react-bootstrap";
import Item from "./Item";
import { useState } from "react";
import Navigator from "./Navigator";


export default function ItemDetail({ producto }) {
  const [inputType, setInputType] = useState("button");

  const handleInput = () => {
    setInputType("input");
  };

  return (
    <div className="itemDetailContainer">
      <div className="detailImage">
        <img src={producto.image} />
      </div>
      <div className="detailInfo">
        <h2> {producto.name} </h2>
        <p> {producto.price} </p>
        {
          inputType === 'button' ? <ItemCount stock={5} initial={1} onAdd={(cantidad) => console.log(`${cantidad} Productos Agregados`)} handleInput={handleInput}/>
          :
          <Navigator/>          
          
        }
      </div>
    </div>
  );
}

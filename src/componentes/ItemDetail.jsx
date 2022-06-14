import ItemCount from "./ItemCount";
import { useState } from "react";
import Navigator from "./Navigator";
import { useCartContext } from "../Context/cartContext";



export default function ItemDetail({ producto }) {
  const [inputType, setInputType] = useState("button");
  
  const {addToCart} = useCartContext()

  
  const handleInput = () => {
    setInputType("input");
  };


  function onAdd(cant) {
    addToCart({...producto, cant})
  }

  return (
    <div className="itemDetailContainer">
      <div className="detailImage">
        <img src={producto.image} />
      </div>
      <div className="detailInfo">
        <h2> {producto.name} </h2>
        <p> {producto.price} </p>
        {
          inputType === 'button' ? <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} handleInput={handleInput}/>
          :
          <Navigator/>          
          
        }
      </div>
    </div>
  );
}

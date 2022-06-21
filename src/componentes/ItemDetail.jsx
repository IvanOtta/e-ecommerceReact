import ItemCount from "./ItemCount";
import { useState } from "react";
import Navigator from "./Navigator";
import { useCartContext } from "../Context/cartContext";



export default function ItemDetail({ product }) {
  const [inputType, setInputType] = useState("button");
  
  const {addToCart} = useCartContext()

  
  const handleInput = () => {
    setInputType("input");
  };


  function onAdd(qnty) {
    addToCart({...product, qnty})
  }

  return (
    <div className="itemDetailContainer">
      <div className="detailImage">
        <img src={product.image} />
      </div>
      <div className="detailInfo">
        <h2> {product.name} </h2>
        <p> ${product.price} </p>
        {
          inputType === 'button' ? <ItemCount stock={product.stock} initial={1} onAdd={onAdd} handleInput={handleInput}/>
          :
          <Navigator/>          
          
        }
      </div>
    </div>
  );
}

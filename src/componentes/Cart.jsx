import { Link } from "react-router-dom";
import { useCartContext } from "../Context/cartContext";
import "../css/cart.css";
import {BsFillTrashFill} from 'react-icons/bs'
import {RiArrowGoBackFill} from 'react-icons/ri'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cart() {
  const { cartList, clearCart, clearItem, precioTotal } = useCartContext();

  
  return (
    <div className="cart-container">
      <div className="cart">
            <h2 className="cartTitle"> Realiza tu pedido!</h2>
            {cartList.map((product) => (
          <li className="cartItem">
            <Link to={`/detalle${product.id}`}>
              <img src={product.image}/>
            </Link>
            <p> {product.name} </p>
            <p> Precio: ${product.price} </p>
            <p> Cantidad: {product.cant} </p>
               <span onClick={() => clearItem(product.id)} > <BsFillTrashFill className="trash"/> </span> 
          </li>
         ))}
         {cartList.length ? (
          <div className="total-delete-btn">
            <h3 className="totalprice">Total: <span className="price"> ${precioTotal} </span></h3> 
            <button className="delete-button btn btn-outline-danger" onClick={clearCart}>
              Vaciar Carrito
            </button>
          </div>
         ) : (
          <div className="carritoVacio">
            <p>No hay productos en tu carrito</p>
            <Link to={"/"} className='backToHome'>
              <RiArrowGoBackFill/>
              <p>Volver a la tienda</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

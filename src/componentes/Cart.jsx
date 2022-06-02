import { Link } from "react-router-dom";
import { useCartContext } from "../Context/cartContext";
import "../css/cart.css";
import {BsFillTrashFill} from 'react-icons/bs'
import {RiArrowGoBackFill} from 'react-icons/ri'
import {CgDanger} from 'react-icons/cg'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cart() {
  const { cartList, clearCart, clearItem, precioTotal } = useCartContext();

  
  return (
    <div className="cart-container">
      {cartList.length === 0 ? "" : <h2 className="cartTitle"> Finalizá tu Compra </h2> }
      <div className="cart">
            {cartList.map((product) => (
          <li className="cartItem">
            <Link to={`/detalle${product.id}`}>
              <img className="img-cart" src={product.image}/>
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

          <button className="btn btn-outline-success">
            Realizar Compra
          </button>
          </div>
         ) : (
          <div className="carritoVacio">
            <div className="alert-cart-empty">
            <CgDanger color={"red"} fontSize={'2rem'}/>
            <p style={{fontFamily: 'roboto'}}>No hay productos en tu carrito</p>
            </div>
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

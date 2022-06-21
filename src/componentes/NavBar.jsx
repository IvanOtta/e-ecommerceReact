import { Link} from "react-router-dom";
import { useCartContext } from "../Context/cartContext";
import CartWidget from "./CartWidget";

function NavBar() {

  const {totalQuantity, cartList} = useCartContext()
  
  return (
    <header>
      <nav>
        <ul>
          <Link to="/" className="link-home">
            <li>Inicio</li>
          </Link>

          <Link to="/categoria/zapatillas" className="link-zapatillas" >
            <li>Zapatillas</li>
          </Link>

          <Link to="/categoria/ropa" className="link-ropa" >
            <li>Ropa</li>
          </Link>

          <Link to ="/cart" className="link-cart">
          <li>Carrito</li>
          </Link>
          <div className="cart-n-qnty">
        <Link to='/cart'>
          <span>
            <CartWidget />
          </span>
        </Link>
          <span className={cartList.length === 0 ? '' : "qntyidad-prod"} >
            {totalQuantity() !== 0 && totalQuantity()}
          </span>

          </div>
          
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

import { Link} from "react-router-dom";
import { useCartContext } from "../Context/cartContext";
import CartWidget from "./CartWidget";

function NavBar() {

  const {cantidadTotal} = useCartContext()
  
  return (
    <header>
      <nav>
        <ul>
          <Link to="/" className="link-home">
            <li>Home</li>
          </Link>

          <Link to="/categoria/zapatillas" className="link-zapatillas" >
            <li>Zapatillas</li>
          </Link>

          <Link to="/categoria/ropa" className="link-ropa" >
            <li>Ropa</li>
          </Link>

          <Link to ="/cart" className="link-cart">
          <li>Cart</li>
          </Link>
          <div className="cart-n-cant">
        <Link to='/cart'>
          <span>
            <CartWidget />
          </span>
        </Link>
          <span className="cantidad-prod" >
            {cantidadTotal() !== 0 && cantidadTotal()}
          </span>

          </div>
          
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
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
          <span>
            <CartWidget />
          </span>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

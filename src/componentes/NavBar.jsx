import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"


function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <Link to= '/' style={{color: "white"}} >
                    <li>
                       Home
                    </li>
                    </Link>
                    <li>
                        <a href="#">Tienda</a>
                    </li>
                    <li>
                        <a href="#">Productos Importados</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                <span>
                    <CartWidget/>
                </span>

                </ul>
            </nav>
        </header>
    )
}


export default NavBar
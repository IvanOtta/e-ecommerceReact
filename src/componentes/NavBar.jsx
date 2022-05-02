import CartWidget from "./CartWidget"


function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
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